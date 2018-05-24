window.addEventListener("message", messageHandler, false);
// maps function to lookup string
Handsontable.renderers.registerRenderer('negativeValueRenderer', negativeValueRenderer);

var isActive = true;
var isNew = true;
var changed = false;
var hot;
var basicSettings = {
    minRows: 1,
    minCols: 1,
    rowHeaders: false,
    colHeaders: false,
    hiddenColumns: true,
    contextMenu: true,
    manualRowResize: true,
    manualColumnResize: true,
    contextMenuCopyPaste: true,
    copyPaste: true,
    mergeCells: true,
    search: true,
    stretchH: 'all',
    autoColumnSize: {useHeaders: true},
    autoRowSize: {syncLimit: 300},
    width: 1000,
    height: window.innerHeight - 214,
    licenseKey: "63ae9-00dfe-0b600-f450d-35624"
};
var tagSettings = {
    filters: false,
    dropdownMenu: false
};
var appSettings = {
    filters: true,
    dropdownMenu: true,
    //collapsibleColumns: true,
    afterSelection: function (row, col, row2, col2) {
        //var meta = this.getCellMeta(row2, col2);
        //
        //if (meta.readOnly) {
        //    this.updateSettings({fillHandle: false});
        //}
        //else {
        //    this.updateSettings({fillHandle: true});
        //}
    },
    cells: function (row, col, prop) {
        var cellProperties = {};

        //if (row === 0 || this.instance.getData()[row][col] === 'readOnly') {
        //    cellProperties.readOnly = true; // make cell read-only if it is first row or the text reads 'readOnly'
        //}
        if (row === 0) {
            cellProperties.renderer = firstRowRenderer; // uses function directly
        }
        else {
            cellProperties.renderer = "negativeValueRenderer"; // uses lookup map
        }

        return cellProperties;
    }
};

$(document).ready(function(){
    Handsontable.dom.addEvent(document.getElementById("search_field"), 'keyup', function (event) {
        var search = hot.getPlugin('search');
        var queryResult = search.query(this.value);

        console.log(queryResult);
        hot.render();
    });

    $(document).on({
        keyup: function(){
            changed = true;
        }
    });

    $(window).on({
        focus: function(){
            isActive = true;
            $("#page-cover").fadeOut();
        },
        blur: function(){
            isActive = false;
            $("#page-cover").fadeIn();
        }
    });

    $('#export-csv').on('click', function(e) {
        hot.getPlugin('exportFile').downloadFile('csv', {filename: $("#table-container").data("text")});
    });

    $('#toggle-header').on('click', function(e){
        appSettings.colHeaders = !appSettings.colHeaders;
        appSettings.rowHeaders = !appSettings.rowHeaders;
        hot.updateSettings({
            "colHeaders": appSettings.colHeaders,
            "rowHeaders": appSettings.rowHeaders
        });
        hot.render();
    });

    $('#add-more').on("click", function(){
        var data = hot.getData();
        hot.loadData(data.concat(generateData(100, data[0].length)));
        changed = true;
    });

    $("#close-btn").on("click", function(){
        var $container = $("#table-container");
        var type = $container.data("type");

        if (type == "tag"){
            $('#export-csv').click();
        }

        if (!changed) {
            parent.window.postMessage({action: "close-iframe", isChanged: changed, type: type}, '*');
            return;
        }
        if (isNew) {
            saveApp();
        } else {
            $.ajax({
                url: "../process.php",
                type: "POST",
                data: {
                    action: "save-app",
                    name: $container.data("name"),
                    type: type,
                    data: JSON.stringify(hot.getData())
                },
                success: function (res) {
                    var type = $("#table-container").data("type");
                    parent.window.postMessage({action: "close-iframe", isChanged: changed, isNew: isNew, time: res, type: type}, '*');
                }
            });
        }
    });

    setInterval(saveApp, 5 * 60000);
});

function messageHandler(message){
    var action = message.data.action;
    var type = message.data.type;

    switch (action) {
        case "open":
            var name = message.data.name;
            var text = message.data.text;
            if (name == "") {
                var settings;
                isNew = true;
                if (type == "tag"){
                    settings = $.extend(basicSettings, tagSettings, {data: generateData(100, 1)});
                    $("#external-btns").hide();
                } else if (type == "app") {
                    settings = $.extend(basicSettings, appSettings, {data: generateData(100, 10)});
                }
                hot = new Handsontable(document.getElementById("table-container"), settings);
                $("#table-container").data("type", type);
            } else {
                isNew = false;
                $.ajax({
                    url: "../process.php",
                    type: "POST",
                    data: {
                        action: "get-app",
                        name: name,
                        type: type
                    },
                    success: function (res) {
                        var settings;
                        if (type == "tag"){
                            settings = $.extend(basicSettings, tagSettings, {data: $.parseJSON(res)});
                            $("#external-btns").hide();
                        } else if (type == "app") {
                            settings = $.extend(basicSettings, appSettings, {data: $.parseJSON(res)});
                        }
                        hot = new Handsontable(document.getElementById("table-container"), settings);
                        $("#table-container").data({
                            "name": name,
                            "text": text,
                            "type": type
                        });
                    }
                });
            }
            break;
    }
}

function saveApp(){
    if (isActive) {
        $.ajax({
            url: "../process.php",
            type: "POST",
            data: {
                action: "save-app",
                data: JSON.stringify(hot.getData()),
                type: $("#table-container").data("type")
            },
            success: function (res) {
                parent.window.postMessage({action: "close-iframe", isChanged: changed, isNew: isNew, time: res, type: $("#table-container").data("type")}, '*');
            }
        });
    }
}

function generateData(rows, cols){
    var res = [], row = [];
    for (var i = 0; i < rows; i ++){
        row = [];
        for (var j = 0; j < cols; j ++){
            row.push("");
        }
        res.push(row);
    }
    return res;
}

function firstRowRenderer(instance, td, row, col, prop, value, cellProperties) {
    Handsontable.renderers.TextRenderer.apply(this, arguments);
    td.style.fontWeight = 'bold';
    td.style.color = 'green';
    td.style.background = '#CEC';
}

function negativeValueRenderer(instance, td, row, col, prop, value, cellProperties) {
    Handsontable.renderers.TextRenderer.apply(this, arguments);

    // if row contains negative number
    if (parseInt(value, 10) < 0) {
        // add class "negative"
        td.className = 'make-me-red';
    }

    if (!value || value === '') {
        td.style.background = 'rgba(0,0,0,0.3)';
    } else {
        td.style.background = '';
    }
}

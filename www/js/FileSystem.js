
function InitializeFileSystem() 
{
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);    
}

function gotFS(fileSystem) 
{
    fileSystem.root.getFile("readme.txt", null, gotFileEntry, fail);
}

function gotFileEntry(fileEntry) 
{
    fileEntry.file(gotFile, fail);
}

function gotFile(file) 
{
    readDataUrl(file);
}

function ReadDeviceSettings(file) 
{
    var reader = new FileReader();
    reader.onloadend = function (evt) 
    {
        console.log("Read as data URL");
        console.log(evt.target.result);
        var DeviceSettings = evt.target.result;
        alert(DeviceSettings);
    };
    reader.readAsDataURL(file);
}

function fail(evt) 
{
    console.log(evt.target.error.code);
    alert("Read device settings file - FAILED!")'
}


function InitializeHub() 
{

    alert("InitializeHub");

    var DeviceID = device.uuid
    var DeviceName = device.name

    jQuery("#DeviceNameRegion").text("Device Name: " + DeviceName);
    jQuery("#DeviceNameRegion").text("Device ID: " + DeviceID);

    jQuery("#LaunchCloudVoteAnchorButton").href = "meridiaars.com";
    jQuery("#LaunchCloudVoteAnchorButton").text("Join Meeting...");

}

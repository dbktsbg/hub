
function InitializeHub() 
{
    SetupToLaunchCloudVoteParticipant();
}

function SetupToLaunchCloudVoteParticipant() 
{

    var DeviceID = device.uuid
    var DeviceName = device.name

    jQuery("#DeviceNameRegion").text("Device Name: " + DeviceName);
    jQuery("#DeviceIDRegion").text("Device ID: " + DeviceID);

    jQuery("#LaunchCloudVoteAnchorButton").attr("href", "http://www.meridiaars.com");
    //jQuery("#LaunchCloudVoteAnchorButton").text("Join Meeting...");
    //jQuery("#LaunchCloudVoteAnchorButton").show();

}

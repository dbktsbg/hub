
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

    if (DeviceID=="ef8048728a9fcdbb")
    {
        jQuery("#LaunchCloudVoteAnchorButton").attr("href", "http://www.meridiaars.com/cv1.html");
    }

    if (DeviceID == "1875fec3215046cd") {
        jQuery("#LaunchCloudVoteAnchorButton").attr("href", "http://www.meridiaars.com/cv2.html");
    }

    jQuery("#DeviceNameRegion").click();
    
    //jQuery("#LaunchCloudVoteAnchorButton").show();

}

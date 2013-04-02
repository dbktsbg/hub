
function InitializeHub() 
{
    SetupToLaunchCloudVoteParticipant();
}

function SetupToLaunchCloudVoteParticipant() 
{

    var DeviceID = device.uuid
    var DeviceName = device.name
    var CloudVoteURL  = "http://www.cloud-vote"

    jQuery("#DeviceNameRegion").text("Device Name: " + DeviceName);
    jQuery("#DeviceIDRegion").text("Device ID: " + DeviceID);

    if (DeviceID=="ef8048728a9fcdbb")
    {
        CloudVoteURL = "http://www.meridiaars.com/cv1.html");
    }

    if (DeviceID == "1875fec3215046cd") 
    {
       CloudVoteURL = "http://www.meridiaars.com/cv2.html");
    }

    jQuery("#LaunchCloudVoteAnchorButton").attr("href", CloudVoteURL);

    window.location.replace(CloudVoteURL);
}

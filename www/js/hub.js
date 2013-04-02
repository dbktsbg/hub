
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

//    if (DeviceID=="ef8048728a9fcdbb")
//    {
//        CloudVoteURL = "http://www.meridiaars.com/cv1.html");
//    }

//    if (DeviceID == "1875fec3215046cd") 
//    {
//       CloudVoteURL = "http://www.meridiaars.com/cv2.html");
//    }

//    //jQuery("#LaunchCloudVoteAnchorButton")[0].click();
//    //jQuery('#LaunchCloudVoteAnchorButton')[0].click();

//    jQuery("#LaunchCloudVoteAnchorButton").attr("href", "http://www.meridiaars.com/cv1.html");

    //window.location.href = "http://www.meridiaars.com/cv1.html";
    window.location.replace("http://www.meridiaars.com/cv1.html");
}

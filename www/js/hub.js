
function InitializeHub() 
{
    SetupToLaunchCloudVoteParticipant();
}

function SetupToLaunchCloudVoteParticipant() 
{

    var DeviceID = device.uuid;
    var DeviceName = device.name;
    var url = "http://www.cloud-vote.com";

    jQuery("#DeviceNameRegion").text("Device Name: " + DeviceName);
    jQuery("#DeviceIDRegion").text("Device ID: " + DeviceID);

    if (DeviceID=="ef8048728a9fcdbb")
    {
        url = "http://www.meridiaars.com/cv1.html";
        jQuery("#LaunchCloudVoteAnchorButton").attr("href", url);
        //window.location.replace("http://www.meridiaars.com/cv1.html");
    }

    if (DeviceID == "1875fec3215046cd") 
    {
        url = "http://www.meridiaars.com/cv2.html";
        jQuery("#LaunchCloudVoteAnchorButton").attr("href", url);
        //window.location.replace("http://www.meridiaars.com/cv2.html");
    }

    jQuery("#LaunchCloudVoteAnchorButton").attr("href", url);
    //window.location.replace("http://www.cloud-vote");

    
    $(location).attr('href', url);

}


function InitializeHub() 
{
    //SetupToLaunchCloudVoteParticipant();

    // Automatically loads new URL (into PhoneGap web view)   xxx
    jQuery(location).attr('href', "http://meridiaprowebsite.cloudapp.net");
    //window.location.href = "http://meridiaprowebsite.cloudapp.net";

}

function SetupToLaunchCloudVoteParticipant() 
{

    var DeviceID = device.uuid;
    var DeviceName = device.name;\

    //var url = "http://www.cloud-vote.com";
    var url = "http://meridiaprowebsite.cloudapp.net";

    jQuery("#LaunchCloudVoteAnchorButton").attr("href", url);

    jQuery("#DeviceNameRegion").text("Device Name: " + DeviceName);
    jQuery("#DeviceIDRegion").text("Device ID: " + DeviceID);




    if (DeviceID=="ef8048728a9fcdbb")
    {
        url = "meridiaprowebsite.cloudapp.net/participant/join";
        //jQuery("#LaunchCloudVoteAnchorButton").attr("href", url);
//        timeout = setTimeout(function () { jQuery(location).attr('href', url); }, 5000);
//        clearTimeout(timeout);
    }

    if (DeviceID == "1875fec3215046cd") 
    {
        //url = "http://www.meridiaars.com/cv2.html";
        url = "meridiaprowebsite.cloudapp.net/participant/join";
        //jQuery("#LaunchCloudVoteAnchorButton").attr("href", url);
//        timeout = setTimeout(function () { jQuery(location).attr('href', url); }, 5000);
//        clearTimeout(timeout);
    }

//    timeout = setTimeout(function () { jQuery(location).attr('href', url); }, 5000);
//    clearTimeout(timeout);

    // Automatically loads new URL (into PhoneGap web view)
    //jQuery(location).attr('href', url);

}


function InitializeHub() 
{
    alert("InitializeHub");

    var DeviceID = device.uuid
    var DeviceName = device.name

    jQuery("#AppRegion").html
                                        (
                                        "<a " +
                                            "data-role=\"button\" " +
                                            "data-theme=\"b\" " +
                                            "href=\"meridiaars.com\" " + 
                                        ">" +
                                            "Join Meeting using Device: " +
                                            DeviceName + " (" + DeviceID + ")" +
                                        "</a>"
                                        );


//                            <a 
//                            href="http:/www.cloud-vote.com/remote" 
//                            data-role="button"
//                            data-theme="b">Join Meeting Now...</a>

}

function LaunchCloudVoteParticipant(DeviceID, DeviceName)
{
    
}


function InitializeHub() 
{
    alert("InitializeHub()");
    jQuery("#ShowCloudVoteButton").on("click", ShowCloudVoteRegion());
    jQuery("#ShowMeetingToolsButton").on("click", ShowMeetingToolsRegion());
}

function ShowCloudVoteRegion() 
{
    alert("ShowCloudVoteRegion()");
     jQuery("#CloudVoteAppRegion").show();
    jQuery("#MeetingToolsRegion").hide();
}

function ShowMeetingToolsRegion() 
{
    alert("ShowMeetingToolsRegion()");
     jQuery("#CloudVoteAppRegion").hide();
    jQuery("#MeetingToolsRegion").show();
}

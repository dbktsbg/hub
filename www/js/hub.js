
function InitializeHub() 
{
    alert("InitializeHub()");
     jQuery("#ShowCloudVoteButton").click(ShowCloudVoteRegion());
    jQuery("#ShowMeetingToolsButton").click(ShowMeetingToolsRegion());
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

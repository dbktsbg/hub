
function InitializeHub() 
{
    jQuery("#ShowCloudVoteButton").click(ShowCloudVoteRegion());
    jQuery("#ShowMeetingToolsButton").click(ShowMeetingToolsRegion());
}

function ShowCloudVoteRegion() 
{
    jQuery("#CloudVoteAppRegion").show();
    jQuery("#MeetingToolsRegion").hide();
}

function ShowMeetingToolsRegion() 
{
    jQuery("#CloudVoteAppRegion").hide();
    jQuery("#MeetingToolsRegion").show();
}

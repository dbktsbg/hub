
function InitializeHub() 
{
    jQuery("#ShowCloudVoteButton").on("click", function (event) { ShowCloudVoteRegion(); });
    jQuery("#ShowMeetingToolsButton").on("click", function (event) { ShowMeetingToolsRegion(); });
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


function InitializeHub() 
{
    alert("InitializeHub()");
    jQuery("#ShowCloudVoteButton").on("click", function (event) { ShowCloudVoteRegion(); });
    jQuery("#ShowMeetingToolsButton").on("click", function (event) { ShowMeetingToolsRegion(); });
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

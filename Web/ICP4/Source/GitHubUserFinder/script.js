function getGithubInfo(user) {
    console.log(user);
    //1. Create an instance of XMLHttpRequest class and send a GET request using it. The function should finally return the object(it now contains the response!)
    var xhttp =new XMLHttpRequest();// creating object for XMLHttpRequest()
    var url = "https://api.github.com/users/"+user;// intialising vaiable and assigning user Github profile link

    xhttp.open('GET',url);

    xhttp.onload = function () {
        //users details are displayed if the response is successful
        if (xhttp.status == 200) {
            console.log(xhttp);
            showUser(JSON.parse(xhttp.responseText));
            //else display error message
        } else if(xhttp.status==404) {
            noSuchUser(user);
        }
    };
    xhttp.send()

}

function showUser(user) {

    //2. setting the contents of the h2 and the two div elements in the div '#profile' with the user content
    console.log(user);
// setting htmls elements using jquery to display user details
    $("#displaytext").text(user.login);
    $(".avatar").html("<img height='200' width='200' src='"+ user.avatar_url+"'/>");
    var link = "<a target='_blank' href='"+user.html_url+"'> Git Hub URL  </a>";
    $(".information").html("<label><u><strong>User Information</strong></u></label>" +
        "<br/><br/><label > ==> Login Name : </label>"+ user.login
        +"<br/><label > ==> Login ID : </label>"+ user.id
        +"<br/><label > ==> Node ID : </label>"+ user.node_id
        +"<br/><label > ==> GitHub URL : </label>"+link
        +"<br/><label > ==> GitHub Repositories Of the User : </label>"+ user.public_repos);

    $("#profile").show();

}

function noSuchUser(username) {
    //3. set the elements such that a suitable message is displayed
    $("#displaytext").text(" username " +username + "does not exists");
    console.log("no such user");
    // setting the elements in html page to blank
    $(".avatar").text(" username " +username + " does not exists ");

    $(".information").html('');
    $("#profile").show();

}


$(document).ready(function(){



    $(document).on('keypress', '#username', function(e){
        $("#profile").hide();

        //check if the enter(or return) key is pressed
        if (e.which == 13) {
            //get what the user enters
            username = $(this).val();
            //clear the text typed in the input
            $(this).val("");
            //get the user's information and store the respsonse
            getGithubInfo(username);
        }
    })
});

// DOM Ready =============================================================
$(document).ready(function() {

    // Populate the user table on initial page load
    populateIPInfo();

/*
    // Username link click
    $('#userList table tbody').on('click', 'td a.linkshowuser', showUserInfo);

    // Add User button click
    $('#btnAddUser').on('click', addUser);

    // Delete User link click
    $('#userList table tbody').on('click', 'td a.linkdeleteuser', deleteUser);
*/

});

// Functions =============================================================

// Fill table with data
function populateIPInfo() {

    // Empty content string
    var tableContent = '';

    // jQuery AJAX call for JSON
    $.getJSON( '/admin/network/getip', function( data ) {
    	//console.log(data[0].eth0);
    	$( "#ip-address" ).val( data[0].eth0.addr );
    	$( "#subnet-mask" ).val( data[0].eth0.netmask );
    	$( "#gateway" ).val( data[0].eth0.gateway );


        // For each item in our JSON, add a table row and cells to the content string
        /*$.each(data, function(){
            tableContent += '<tr>';
            tableContent += '<td><a href="#" class="linkshowuser" rel="' + this.username + '">' + this.username + '</a></td>';
            tableContent += '<td>' + this.email + '</td>';
            tableContent += '<td><a href="#" class="linkdeleteuser" rel="' + this._id + '">delete</a></td>';
            tableContent += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#userList table tbody').html(tableContent);*/
    });
};
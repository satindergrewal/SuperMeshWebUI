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

    //Update LAN0 input values on DHCP/Static options selection change
    $('input[type=radio][name=eth0_dhcp_satic]').change(function() {
        if (this.value == 'dhcp') {
            $( "#eth0_dhcp" ).prop( "checked", true );
            $( "#eth0_ip_address" ).val('');
            $( "#eth0_subnet_mask" ).val('');
            $( "#eth0_gateway" ).val('');
            $( "#eth0_ip_address" ).prop( "disabled", true );
            $( "#eth0_subnet_mask" ).prop( "disabled", true );
            $( "#eth0_gateway" ).prop( "disabled", true );
        }
        else if (this.value == 'static') {
            $( "#eth0_static" ).prop( "checked", true );
            $( "#eth0_ip_address" ).prop( "disabled", false );
            $( "#eth0_subnet_mask" ).prop( "disabled", false );
            $( "#eth0_gateway" ).prop( "disabled", false );
        }
    });
    
    //Update WLAN0 input values on DHCP/Static options selection change
    $('input[type=radio][name=wlan0_dhcp_satic]').change(function() {
        if (this.value == 'dhcp') {
            $( "#wlan0_dhcp" ).prop( "checked", true );
            $( "#wlan0_ip_address" ).val('');
            $( "#wlan0_subnet_mask" ).val('');
            $( "#wlan0_gateway" ).val('');
            $( "#wlan0_ip_address" ).prop( "disabled", true );
            $( "#wlan0_subnet_mask" ).prop( "disabled", true );
            $( "#wlan0_gateway" ).prop( "disabled", true );
        }
        else if (this.value == 'static') {
            $( "#wlan0_static" ).prop( "checked", true );
            $( "#wlan0_ip_address" ).prop( "disabled", false );
            $( "#wlan0_subnet_mask" ).prop( "disabled", false );
            $( "#wlan0_gateway" ).prop( "disabled", false );
        }
    });

});

// Functions =============================================================

// Fill table with data
function populateIPInfo() {

    // Empty content string
    var tableContent = '';

    // jQuery AJAX call for JSON
    $.getJSON( '/admin/network/getip', function( data ) {
    	//console.log(data[0].wlan0);

        //Enable/Disable and feed eth0 data to form input fields
        if ( data[0].eth0.dhcp_static == 'dhcp' ) {
            $( "#eth0_dhcp" ).prop( "checked", true );
            $( "#eth0_ip_address" ).prop( "disabled", true );
            $( "#eth0_subnet_mask" ).prop( "disabled", true );
            $( "#eth0_gateway" ).prop( "disabled", true );
        } else {
            $( "#eth0_static" ).prop( "checked", true );
            $( "#eth0_ip_address" ).val( data[0].eth0.addr );
            $( "#eth0_subnet_mask" ).val( data[0].eth0.netmask );
            $( "#eth0_gateway" ).val( data[0].eth0.gateway );
        }

        //Enable/Disable and feed wlan0 data to form input fields
        if ( data[1].wlan0.dhcp_static == 'dhcp' ) {
            $( "#wlan0_dhcp" ).prop( "checked", true );
            $( "#wlan0_ip_address" ).prop( "disabled", true );
            $( "#wlan0_subnet_mask" ).prop( "disabled", true );
            $( "#wlan0_gateway" ).prop( "disabled", true );
        } else {
            $( "#wlan0_static" ).prop( "checked", true );
            $( "#wlan0_ip_address" ).val( data[1].wlan0.addr );
            $( "#wlan0_subnet_mask" ).val( data[1].wlan0.netmask );
            $( "#wlan0_gateway" ).val( data[1].wlan0.gateway );
        }


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
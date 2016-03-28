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
            /*$( "#eth0_ip_address" ).val('');
            $( "#eth0_subnet_mask" ).val('');
            $( "#eth0_gateway" ).val('');*/
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
            /*$( "#wlan0_ip_address" ).val('');
            $( "#wlan0_subnet_mask" ).val('');
            $( "#wlan0_gateway" ).val('');*/
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





    //Update LAN1 input values on DHCP/Static options selection change
    $('input[type=radio][name=eth1_dhcp_satic]').change(function() {
        if (this.value == 'dhcp') {
            $( "#eth1_dhcp" ).prop( "checked", true );
            /*$( "#eth1_ip_address" ).val('');
            $( "#eth1_subnet_mask" ).val('');
            $( "#eth1_gateway" ).val('');*/
            $( "#eth1_ip_address" ).prop( "disabled", true );
            $( "#eth1_subnet_mask" ).prop( "disabled", true );
            $( "#eth1_gateway" ).prop( "disabled", true );
        }
        else if (this.value == 'static') {
            $( "#eth1_static" ).prop( "checked", true );
            $( "#eth1_ip_address" ).prop( "disabled", false );
            $( "#eth1_subnet_mask" ).prop( "disabled", false );
            $( "#eth1_gateway" ).prop( "disabled", false );
        }
    });
    
    //Update WLAN1 input values on DHCP/Static options selection change
    $('input[type=radio][name=wlan1_dhcp_satic]').change(function() {
        if (this.value == 'dhcp') {
            $( "#wlan1_dhcp" ).prop( "checked", true );
            /*$( "#wlan1_ip_address" ).val('');
            $( "#wlan1_subnet_mask" ).val('');
            $( "#wlan1_gateway" ).val('');*/
            $( "#wlan1_ip_address" ).prop( "disabled", true );
            $( "#wlan1_subnet_mask" ).prop( "disabled", true );
            $( "#wlan1_gateway" ).prop( "disabled", true );
        }
        else if (this.value == 'static') {
            $( "#wlan1_static" ).prop( "checked", true );
            $( "#wlan1_ip_address" ).prop( "disabled", false );
            $( "#wlan1_subnet_mask" ).prop( "disabled", false );
            $( "#wlan1_gateway" ).prop( "disabled", false );
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
        if ( data['eth0_iface'] == 'dhcp' ) {
            $( "#eth0_dhcp" ).prop( "checked", true );
            $( "#eth0_ip_address" ).prop( "disabled", true );
            $( "#eth0_subnet_mask" ).prop( "disabled", true );
            $( "#eth0_gateway" ).prop( "disabled", true );
        } else {
            $( "#eth0_static" ).prop( "checked", true );
            $( "#eth0_ip_address" ).val( data['eth0_addr'] );
            $( "#eth0_subnet_mask" ).val( data['eth0_netmask'] );
            $( "#eth0_gateway" ).val( data['eth0_gateway'] );
        }

        //Enable/Disable and feed wlan0 data to form input fields
        if ( data['wlan0_iface'] == 'dhcp' ) {
            $( "#wlan0_dhcp" ).prop( "checked", true );
            $( "#wlan0_ip_address" ).prop( "disabled", true );
            $( "#wlan0_subnet_mask" ).prop( "disabled", true );
            $( "#wlan0_gateway" ).prop( "disabled", true );
        } else {
            $( "#wlan0_static" ).prop( "checked", true );
            $( "#wlan0_ip_address" ).val( data['wlan0_addr'] );
            $( "#wlan0_subnet_mask" ).val( data['wlan0_netmask'] );
            $( "#wlan0_gateway" ).val( data['wlan0_gateway'] );
        }



        //Enable/Disable and feed eth1 data to form input fields
        if ( data['eth1_iface'] == 'dhcp' ) {
            $( "#eth1_dhcp" ).prop( "checked", true );
            $( "#eth1_ip_address" ).prop( "disabled", true );
            $( "#eth1_subnet_mask" ).prop( "disabled", true );
            $( "#eth1_gateway" ).prop( "disabled", true );
        } else {
            $( "#eth1_static" ).prop( "checked", true );
            $( "#eth1_ip_address" ).val( data['eth1_addr'] );
            $( "#eth1_subnet_mask" ).val( data['eth1_netmask'] );
            $( "#eth1_gateway" ).val( data['eth1_gateway'] );
        }

        //Enable/Disable and feed wlan1 data to form input fields
        if ( data['wlan1_iface'] == 'dhcp' ) {
            $( "#wlan1_dhcp" ).prop( "checked", true );
            $( "#wlan1_ip_address" ).prop( "disabled", true );
            $( "#wlan1_subnet_mask" ).prop( "disabled", true );
            $( "#wlan1_gateway" ).prop( "disabled", true );
        } else {
            $( "#wlan1_static" ).prop( "checked", true );
            $( "#wlan1_ip_address" ).val( data['wlan1_addr'] );
            $( "#wlan1_subnet_mask" ).val( data['wlan1_netmask'] );
            $( "#wlan1_gateway" ).val( data['wlan1_gateway'] );
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
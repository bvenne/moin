var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');     

/*
		var myContact = navigator.contacts.create({"displayName": "Test User"});
        myContact.note = "This contact has a note.";
        alert("The contact, " + myContact.displayName + ", note: " + myContact.note);
        app.receivedEvent('contactcreated');
        myContact.save(app.onContactSaveSuccess,app.onContactSaveError);
*/

		// find all contacts
		var myContacts = new ContactFindOptions();
		myContacts.filter = "";
		var filter = ["displayName", "addresses"];
		navigator.contacts.find(filter, app.onReadContactsSuccess, app.onReadContactsError, options);
		app.receivedEvent('contactcreated');
		
   
        
           
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
		
		
		var pushNotification = window.plugins.pushNotification;
		pushNotification.register(app.successHandler, app.errorHandler,{"senderID":"904001332506","ecb":"app.onNotificationGCM"});
		
		
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    
    
    
//save contacts
onContactSaveSuccess: function(contact) {
        window.alert("Save Success");
    },
    onContactSaveError: function(contact) {
        window.alert("Save Failed");
    },    

// read contacts
onReadContactsSuccess: function(contacts) {
			for (var i = 0; i < contacts.length; i++) {
			for (var j = 0; j < contacts[i].addresses.length; j++) {
				alert("Pref: "         + contacts[i].addresses[j].pref          + "\n" +
					"Type: "           + contacts[i].addresses[j].type          + "\n" +
					"Formatted: "      + contacts[i].addresses[j].formatted     + "\n" +
					"Street Address: " + contacts[i].addresses[j].streetAddress + "\n" +
					"Locality: "       + contacts[i].addresses[j].locality      + "\n" +
					"Region: "         + contacts[i].addresses[j].region        + "\n" +
					"Postal Code: "    + contacts[i].addresses[j].postalCode    + "\n" +
					"Country: "        + contacts[i].addresses[j].country);
			}
		}
    },
    onReadContactsError: function(contacts) {
        window.alert("Read Failed", contact);
    },    



// result contains any message sent from the plugin call
successHandler: function(result) {
    //alert('Callback Success! Result = '+result)
},

errorHandler:function(error) {
    alert(error);
},

onNotificationGCM: function(e) {
        switch( e.event )
        {
            case 'registered':
                if ( e.regid.length > 0 )
                {
                    console.log("Regid " + e.regid);
                    //alert('registration id = '+e.regid);
                    
                    //document.getElementById("myregid").innerHTML = "New text!";
                    
                    document.getElementById("myregid").innerHTML = "registration id = "+e.regid;
                    
                    //Put regid to register form:
                    document.getElementById("regId").value = e.regid;
                    
                    //var parentElement = document.getElementById(id);
					//var reggi_id = parentElement.querySelector('.myregid');
					//reggi_id.innerHTML += 'ID lautet: '+e.regid;

                }
            break;
 
            case 'message':
              // this is the actual push notification. its format depends on the data model from the push server
              alert('message = '+e.message+' msgcnt = '+e.msgcnt);
            break;
 
            case 'error':
              alert('GCM error = '+e.msg);
            break;
 
            default:
              alert('An unknown GCM event has occurred');
              break;
        }
    }, 
    
    

	//READ CONTACTS...
/*
  function getContactList() {
        var contactList = new ContactFindOptions(); 
        contactList.filter=""; 
        contactList.multiple=true;
        var fields = ["*"];  //"*" will return all contact fields
        navigator.contacts.find(fields,  getContactFields, contactList );
    }


  function getContactFields(contacts) {
         for (var i=0; i<contacts.length; i++)
        {
               alert(contacts.length);
               alert("Name:" + contacts[i].displayName + "\n"+
                         "E-Mail:"+ contacts[i].emails)
				for (var j=0; j<contacts[i].emails.length; j++) {
					alert("E-Mail hier: " + contacts[i].emails[j].type);
				}
		}  
	}




// display the address information for all contacts
onSuccess: function(contacts) {
    for (var i = 0; i < contacts.length; i++) {
        alert("Formatted: "  + contacts[i].name.formatted       + "\n" +
            "Family Name: "  + contacts[i].name.familyName      + "\n" +
            "Given Name: "   + contacts[i].name.givenName       + "\n" +
            "Middle Name: "  + contacts[i].name.middleName      + "\n" +
            "Suffix: "       + contacts[i].name.honorificSuffix + "\n" +
            "Prefix: "       + contacts[i].name.honorificSuffix);
    }
},

onError: function(contactError) {
    alert('onError!');
}


    
 */   
    
    
    
    

};

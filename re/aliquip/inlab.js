javascript
biometricManager.requestAccess({
  requestedPermissions: ['fingerPrint'],
  callback: function(status) {
    if (status) {
      console.log('Request successful');
    } else {
      console.log('Request failed');
    }
  }
});
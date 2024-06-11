document.getElementById('copy-button').addEventListener('click', function() {
    var copyText = document.getElementById('share-link');
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy');
    alert('Link copied to clipboard: ' + copyText.value);
  });
  
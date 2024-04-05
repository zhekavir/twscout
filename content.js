const twitterLinks = document.querySelectorAll('a[href*="twitter.com"]');

if (twitterLinks.length) {
  for (const link of twitterLinks) {
    const newLink = document.createElement('a');
    newLink.href = `https://tweetscout.io/search?q=${link.href}`;
    newLink.innerText = '🔍';
    link.after(newLink);
  }
}

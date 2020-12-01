export default {

  /* Steps */
  _st: {
    received: 'Förfrågan mottagen av servern...',
    starting: 'Startar...',
    fetchingData: 'Hämtar data...',
    fetchingTweets: 'Hämtar tweets...',
    computingData: 'Beräknar data...',
    generatingImage: 'Genererar bilden...',
    uploadingMedia: 'Laddar upp bilden...',
    publishingTweet: 'Publicerar tweeten...',
    savingResults: 'Sparar resultat...',
  },

  /* Features */
  _ft: {
    'twitter-activity': {
      basedOnLastDays: 'Baserat på de senaste {days} dagarna...', // TODO
      countingTweets: '... och om {count} tweets räknas ihop:', // TODO
      interactionsReceived: 'Interageringar mottagna', // TODO
      last30Days: '*: senaste 30 dygnen', // TODO
      tweetingHours: 'Timmar för tweets', // TODO
      tweetRepartition: 'Omdelning av tweets', // TODO
    },
    'first-follower': {
      yourFirstFollowerIs: 'Din första följare är', // TODO
      dateFormat: 'på {month}/{day}/{year} {hour}:{minute}:{second}', // TODO
    },
    'first-following': {
      yourFirstFollowingIs: 'Din första följande är', // TODO
      dateFormat: 'på {month}/{day}/{year} {hour}:{minute}:{second}', // TODO
    },
    'first-to-follow': {
      youAreNotFollowing: 'Du följer inte {user}...',
      notFollowingYou: '{user} följer inte dig...',
      youFollowed: 'Du följde {user}: ',
      followedYou: '{user} följde dig: ',
      dateFormat: '{month}/{day}/{year} klockan {hour}:{minute}:{second}',
      dateFormat2: '{month}/{day}/{year} klockan {hour}h',
    },
    friendships: {
      average: 'Vänskapsgenomsnittet är',
      following: 'Du följer dem',
      'not-following': 'Du följer inte dem',
      followed_by: 'De följer dig',
      'not-followed_by': 'De följer inte dig',
      notifications_enabled: 'Du notifieras när de tweetar',
      'not-notifications_enabled': 'Du notifieras inte när de tweetar',
      blocking: 'Du blockerade dem',
      'not-blocking': 'Du blockerade inte dem',
      blocked_by: 'De blockerade dig',
      'not-blocked_by': 'De blockerade dig inte',
      muting: 'Du tystade inte dem',
      'not-muting': 'De tystade inte dig',
      want_retweets: 'Du ser deras retweets',
      'not-want_retweets': 'Du ser inte deras retweets',
      marked_spam: 'Du markerade dem som spam',
      'not-marked_spam': 'Du markerade inte dem som spam',
    },
    'tweet-rate': {
      average: '{user} tweetar i genomsnitt...',
      tweetsPerDay: '{count} gånger om dagen',
    },
    'common-friends': {
      friendsRemaining: '... och {count} andra vänner !',
      noFriends: 'Inga vänner gemensamt...',
      commonFriends: 'Jag har {count} gemensamma vänner med {user} !',
      noCommonFriends: 'Jag har inga gemensamma vänner med {user}...',
    },
    valentine: 'Ditt Valentine {year} är',
    'stolen-kiss': 'Ditt Stolen Kiss är',
    'hidden-twin': 'Din Hidden Twin är',
    'secret-crush': 'Din Secret Crush är',
    'may-day': 'Jag ger en Lily-of-the-Valley 💐 till',
    'halloween-duo': 'Ditt Halloween Duo är',
    'new-years-kiss': "Min New Year's Kiss är",
  },

  /* Tweet content */
  _tw: {
    'first-to-follow': '{text}',
    friendships: '{text}',
    'top-friends': '{users}',
    'famous-followers': '{users}',
    'common-friends': '{text}',
    'tweet-rate': '{text}',
    'emoji-mood': '{emojis}',
    valentine: 'Detta år är du min {user}! ❤️\nOch du vem kommer att bli din?',
    'twitter-activity': "Här är mitt kontos statistiker från {days} dagar sedan. Har du bättre interaktioner?", // TODO
    'first-follower': 'Jag har just upptäckt min första följare på Twitter, det är {user} och de följde mig {date}!\nVem är din första följare?', // TODO
    'first-following': 'Jag har just upptäckt min första följande på Twitter, det är {user} och jag följde dem {date}!\nvem är din första följande?', // TODO
    'secret-crush': '{user} älskar dig i hemlighet! 😳\nVem älskar du i hemlighet?',
    'hidden-twin': '{user} är min hemliga tvilling 😱\nLista ut vem som är din!',
    'stolen-kiss': '{user} skulle vilja kyssa dig runt hörnet... 😏\nOch du, vem skulle vilja göra det?',
    'may-day': '{user}, jag ger dig min bästa bukett liljekonvalj! 💐\nVem ska du ge din till?',
    'halloween-duo': 'Jag behöver inte ens klä ut mig i år för att vara läskig, jag är med {user}! 🎃👻\nOch du, ved vem ska du skrämma som mest med?',
    'new-years-kiss': 'Jag förbereder mitt bästa förra års kyss och första av nästa år {user} 😘💕\nOch du, vem kommer du att kyssa vid midnatt?',
  },

}

export default {

  /* Layouts */
  _lt: {

    default: {
      cookiesBanner: 'Vi använder cookies 🍪 för att erbjuda den bästa upplevelsen. Genom att fortsätta använda vår hemsida accepterar du vår cookies policy. {button}',
      readMore: 'Läs mer...',
    },

  },

  /* Common */
  _cm: {
    lastRevision: 'Senast uppdaterad:',
    contactUs: 'Kontakta oss',
    followUs: 'Följ oss',
    reviewUs: 'Recensera oss',
    close: 'Stäng',
    cancel: 'Avbryt',
  },

  /* Languages */
  _lg: {
    french: 'Franska',
    english: 'Engelska',
    polish: 'Polska',
    spanish: 'Spanska',
    swedish: 'Svenska',
    turkish: 'Turkiska',
    indonesian: 'Indonesiska',
    portuguese: 'Portuguesiska',
    simplifiedChinese: 'Kinesiska (förenklad)',
    traditionalChinese: 'Kinesiska (traditionell)',
  },

  /* Pluralization */
  _pl: {
    seconds: 'sekund | sekund | sekunder',
    features: 'funktion | funktioner | funktioner', // TODO
  },

  /* Components */
  _cp: {

    /* Header component */
    header: {
      sidebarHint: 'Upptäck alla våra material genom att klicka på menyikonen här! 😉',
      logIn: 'Logga in',
      myAccount: 'Mitt konto',
      switchAccount: 'Byt konto',
      logout: 'Logga ut',
    },

    /* Footer component */
    footer: {
      madeWithLove: 'Affinitweet är en Twitterbaserad statistik och underhållningsplattform skapad 2015 med ❤️ i Frankrike.',
      allRightsReserved: 'All rights reserved.',
      about: 'Om',
      changelog: 'Ändringslogg',
      legal: 'Lagrelaterat',
      partners: 'Partner',
    },

    stateButton: {
      hold: 'Håll för att bekräfta',
      submit: 'Klicka för att bekräfta',
      loading: 'Handling pågår...',
      cancel: 'Avbryt',
    },

    clearHistory: {
      title: 'Rensa historia',
      description: 'Genom att rensa din historia kommer all information och bilder på dina nuverande sparade resultat raderas.',
      description2: 'Du kommer inte att kunna se dina tidigare resultat efter denna rensning, vill du verkligen genomföra handlingen?',
      holdButton: 'Håll för att rensa',
      loadingButton: 'Rensar historia...',
      successModal: 'Din historia har rensats.',
    },

    deleteAccount: {
      title: 'Radera konto',
      description: 'Gick något fel? Berätta för oss på vårt Twitter-konto så vi kan förbättra oss själva!',
      description2: 'Genom att radera ditt konto kommer all data på dig raderas, inklusive din historia. Ingen data behålls och du kommer automatiskt loggas ut från Affinitweet.',
      description3: 'Du kommer inte att kunna hämta ditt nuvarande konto efter denna radering, vill du verkligen genomföra handlingen?',
      holdButton: 'Håll för att radera',
      loadingButton: 'Raderar konto...',
      successModal: 'Ditt konto har raderats.',
    },

  },

  /* Features */
  _ft: {

    new: 'Nytt',
    popular: 'Populärt',
    real: 'Riktigt',
    fun: 'Nöje',

    list: {

      friendships: {
        description: 'Allt du behöver för att veta om länkarna mellan dig och en användare! 🙌',
        longDescription: 'Som tack för Friendships kommer du veta hur mycket du är vänner med en annan användare du väljer: ju fler blå pellets ni har, destu starkare är länkarna! Skriv in Twitter-namnet på den valda personen och upptäck era Friendships!',
      },
      'common-friends': {
        description: 'Upptäck vänner du har gemensamt med en annan användare! 👥',
        longDescription: 'Gemensamma vänner-funktionen låter dig upptäcka de prenumerationer/vänner du har gemensamt med någon annan. Har ni samma smaker och hur mycket?',
      },
      'top-friends': {
        description: 'Upptäck dina bästa Twitter-vänner på senaste tiden! 🤗',
        longDescription: 'Toppvänner-funktioner låter dig veta vilka dina bästa vänner är på Twitter. Vi etablerar en ranking genom att analysera informationen som skickas och mottagits av ditt konto. Efter det räknar vi, lägger till och sorterar dem för att generera dina toppvänner!',
      },
      'famous-followers': {
        description: 'Upptäck de mest populära personerna bland dina följare! 💅',
        longDescription: 'Famous Followers låter dig veta vilka personer som har flest följare bland dina egna. Vi samlar var och en av dina följare och deras antal följare för att sedan sortera och generera dina Famous Followers!',
      },
      valentine: {
        description: 'Vi vet vem ditt Valentine kommer att bli i år... Du då? 💏',
        longDescription: 'Vi håller algoritmen för detta hemligt. Allt vi kan säga är att vi försöker hålla oss till verkligheten, kommer våran Valentine nöja dig... ?',
      },
      'twitter-activity': {
        description: 'Discover the summary of your activity and your Twitter statistics 📊', // TODO
        longDescription: 'Tack vare Twitter Activity kommer du att veta när du tweetar som oftast, hur många interaktioner (intryck, retweets, gillar, svar) du har totalt och distributionen av dina tweets.', // TODO
      },
      'first-follower': {
        description: 'Upptäck vem som var först med att följa dig på Twitter 1️⃣', // TODO
        longDescription: 'Tack vare First Follower kommer du att veta vem din första följare är och när de följde dig (eller den äldste, för ifall du inte längre följs under tiden så får vi inte veta).', // TODO
      },
      'first-following': {
        description: 'Upptäck vilken person du först följde på Twitter 1️⃣', // TODO
        longDescription: 'Tack vare First Following kommer du att veta vem din första följande är och när du följde dem (eller dem äldste, för ifall du slutat följa folk under tiden så får vi inte veta).', // TODO
      },
      'secret-crush': {
        description: 'Någon älskar dig i hemiglet... och döljer det från det... 😳',
        longDescription: 'Vi håller algoritmen för detta hemligt. Allt vi kan säga är att din Secret Crush kommer imponera dig, bra eller dåligt?',
      },
      'hidden-twin': {
        description: 'Ja, du har en hemlig tvilling... vem fan är det? 🤔',
        longDescription: 'Vi håller algoritmen för detta hemligt. Allt vi kan säga är att din Hidden Twin kommer att imponera dig, bra eller dåligt?',
      },
      'stolen-kiss': {
        description: 'Vem vill sno en kyss från dig på ett gatohörn? 💋',
        longDescription: 'Vi håller algoritmen för detta hemligt. Allt vi kan säga är att din Stolen Kiss kommer att imponera dig, bra eller dåligt?',
      },
      'may-day': {
        description: 'Vem är din bästa bukett till i år? 💐',
        longDescription: 'Vi håller algoritmen för detta hemligt. Allt vi kan säga är att du kommer att göra någon väldigt lycklig!',
      },
      'halloween-duo': {
        description: 'Vem kommer du att vara räddast med i år? 🎃👻',
        longDescription: 'Vi håller algoritmen för detta hemligt. Allt vi kan säga är att ni kommer att vara kuslig på Halloween i år!',
      },
      'tweet-rate': {
        description: 'Jämför din tweet takt med en annan användares! 📊',
        longDescription: 'Tweet Rate låter dig veta medianen av antalet tweets du publicerar om dygnet sedan du registrerade på Twitter och jämför dig med en annan! Är du den mest aktiva?',
      },
      'first-to-follow': {
        description: 'Lista ut om du har följt en användare och tvärtom! 😮',
        longDescription: 'First To Follow låter dig upptäcka datumet och tiden du följde en annan användare på Twitter, och tvärtom! Vem följde den andra först?',
      },
      'emoji-mood': {
        description: 'Vilka emojis tweetar du som mest? 🤖',
        longDescription: 'Tack vare Emoji Mood kommer du att upptäcka vilka emoticons du har tweetat på sistone... Skulle du vilja slå vad på din TOPP 3?',
      },
      'new-years-kiss': {
        description: 'Vem kommer du att kyssa i år under misteln? 😘',
        longDescription: 'Vi håller algoritmen för detta hemligt. Allt vi kan säga är att du kommer kyssa någon vid midnatt!',
      },

    },

  },

  /* Pages */
  _pg: {

    /* Welcome page */
    welcome: {
      title: 'Welcome', // TODO
      welcomeToAffinitweet: 'Välkommen till Affinitweet&nbsp;&nbsp;🎉', // TODO
      helloYou: 'Hej {username}&nbsp;&nbsp;😊', // TODO
      proudToWelcomeYou: 'Hej {username}, vi är stolta att kunna bekanta dig och är glada att välkomna dig bland våra mer än 6 miljoner användare!', // TODO
      onboardingCreation: 'Vi är nöjda att ha dig tillbaka med oss! Vi skapade den här lilla ombordstigningen för att vara säkra på att du vet allt innan alla andra...', // TODO
      next: 'Nästa', // TODO
      littleQuestion: 'Snabb fråga...', // TODO
      doYouWantToFollowUs: 'Vi uppdaterar Affinitweet regelbundet, vill du följa oss på Twitter för att ta reda på när nya funktioner finns tillgängliga?', // TODO
      iWantToFollowYou: 'Jag vill följa er 😊', // TODO
      iDontWantToFollowYou: 'Nej tack, jag klarar mig ändå!', // TODO
      great: 'Toppen&nbsp;&nbsp;🥰', // TODO
      doYouWantToEnableNotifications: 'Okej, medan du ändå håller på vill du notifieras om våra tweets så att du kan vara den förste som testar våra nya funktioner?', // TODO
      iWantToBeNotified: 'Jag vill också aviseras 😇', // TODO
      iDontWantToBeNotified: 'Nej, jag vill bara ha tweeten!', // TODO
      noProblem: 'Inga problem&nbsp;&nbsp;😉', // TODO
      noProblemDescription: 'Du har rätt trots allt, vi känner knappt varandra! Kanske nästa gång, vi hoppas du har roligt på Affinitweet 💜', // TODO
      nice: 'Fint&nbsp;&nbsp;🤗', // TODO
      niceDescription: 'Hopp... hopp... och hopp!<br />Så ja, nu följer du oss på Twitter! Tack så mycket och ha det roligt på Affinitweet 💜', // TODO
      awesome: 'Super&nbsp;&nbsp;😍', // TODO
      awesomeDescription: 'Hopp... hopp... och hopp!<br /><br />Så ja, nu följer du oss på Twitter och aviseringar har slagits på! Tack så mycket och ha det roligt på Affinitweet 💜', // TODO
      letsGo: 'Då kör vi!', // TODO
    },

    /* Home page */
    index: {
      title: 'Hem',
      description: 'Det bästa stället att ha roligt med dina vänner på Twitter! Se din statistiker och mer!',
      titleH1: 'Det bästa stället att ha roligt med dina vänner på Twitter!',
      titleH2: 'Se dina statistiker och mer!',
      highlights: 'Highlights',
      generatedResults: 'Vackra genererade resultat',
      generatedResultsDescription: 'Affinitweet är känt för deras vakra genererade bilder, vi använder de bästa verktygen för dina resultat.',
      userConsentPrivacy: 'Användarmedgivande & integritet',
      userConsentPrivacyDescription: 'Allt vi gör på Affinitweet med din data förklaras i vår sekretesspolicy, inga överraskningar, inget autoföljande eller autotweet.',
      worldFamousLeader: 'Världens berömde ledare',
      worldFamousLeaderDescription: 'Affinitweet öppnades i februari 2014 och fler än två miljoner användare använder våra tjänster, överallt i världen.',
      fastRealTimeResults: 'Snabba och realtidsbaserade resultat',
      fastRealTimeResultsDescription: "Vi byggde Affinitweet på de sista webbteknologierna, så det är så snabbt som möjligt med realtid på funktionssidor.",
      noAdsNoVirus: 'Ingen påträngande reklam, inga virus',
      noAdsNoVirusDescription: 'Affinitweet har skapats enbart för nöjes skull, det finns inga virus och enbart ads på hela hemsidan (inga popups, inga omdirigeringar).',
      multilingualOpen: 'Flerspråkigt & öppet',
      multilingualOpenDescription: 'Affinitweet är tillgängligt på flera olika språk och alla kan bidra och lägga till sitt eget.',
      trustpilotH1: 'Se våra användares recensioner på Trustpilot!',
      trustpilotH2: 'Vi är betygsatta med {rate} av våra användare, kommer du att recensera oss härnäst?',
      trustpilotButton: 'Se & skicka in en recension',
      statistics: 'Statistik',
      totalUsers: '6 milljoner',
      totalUsersDescription: 'Användare litar på oss och använder våra tjänster',
      monthlyUsers: '400 000',
      monthlyUsersDescription: 'Unika användare som återkommer i genomsnitt var månad',
      totalFeatures: '20 milljoner',
      totalFeaturesDoneDescription: 'Funktioner gjorda sedan vi öppnade 2014',
      features: 'Funktioner',
      latestNews: 'Senaste nytt',
      getInTouch: 'Kontakta oss!',
      getInTouchP1: 'Vi finns tillgängligt närsomhelst på vårt Twitter-konto {twitterName}.',
      getInTouchP2: 'Följ oss och notifieras om uppdateringar med kommande ting!',
      getInTouchP3: 'Skicka gärna en tweet eller direkt meddelande till oss om du har någon fråga, något förslag eller bugg att rapportera.',
      getInTouchP4: 'För kommersiella syften kan du kontakta oss via e-post, se vår sida för {pageName}.',
    },

    /* User profile page */
    profile: {
      title: 'Profil',
      description: 'Konto, inställningar och historia till ditt konto.',
      joinBeta: 'Gå med i Betaprogrammet för att testa våra funktioner innan de släpps offentligt!', // TODO
      betaTerms: 'Betaprogrammet är helt gratis. Vissa funktioner kanske inte fungerar och kan ändras närsomhelst tills de lanserats.', // TODO
      applyForFree: 'Gå med gratis', // TODO
      noThanks: 'Nej tack', // TODO
      profile: 'Profil',
      history: 'Historia',
      preferences: 'Inställningar',
      language: 'Språk',
      by: 'av',
      addLanguage: 'Lägg till språk...',
      contributeOnGitHub: 'bidra på GitHub',
      account: 'Konto',
      followers: 'Följare',
      followings: 'Följande',
      noHistory: 'Ingen historiedata.',
      autoTweet: 'Tweeta resultat',
      autoTweetDescription: 'Kryssa i detta alternativ för att automatiskt tweeta dina resultat. En tweet kommer att publiceras så fort resultaten är redo, inget mer.',
      saveResults: 'Spara resultat',
      saveResultsDescription: 'Kryssa i detta alternativ för att spara dina resultat i historian (funktionsnamn + bild + tid). Som standard bevarar vi inte dina resultat.',
      emojis: 'Emojis-paket',
      iOSemojis: 'iOS (Apple)',
      iOSemojisDescription: 'Dina resultat kommer att generas med iOS Emojis.',
      androidEmojis: 'Android (Google)',
      androidEmojisDescription: 'Dina resultat kommer att genereras med Android Emojis.',
      clearHistory: 'Rensa historia',
      clearHistoryDescription: 'Rensa din Affinitweet-resultathistoria.',
      deleteAccount: 'Radera konto',
      deleteAccountDescription: 'Radera ditt Affinitweet-konto, allt kommer att förloras.',
      show: 'Vy',
      showMore: 'Visa mer...',
      saved: 'Sparad',
    },

    /* Feature page */
    feature: {
      login: 'Logga in för att fortsätta...',
      startFeature: 'Då kör vi!',
      betaFeature: 'This feature is currently in beta and is available for users being part of the Beta program only. You can apply for this program if you want to test this feature.', // TODO
      applyForFree: 'Apply for free', // TODO
      results: 'Här är dina resultat!',
      tweetResults: 'Tweeta resultat',
      tweetingResults: 'Tweetar...',
      requireAutoTweetDescription: 'Vill du aktivera automatisk tweetning av resultat? Du kommer att kunna avaktivera detta alternativ från din profil.',
      yesEnable: 'Ja, aktivera',
      no: 'Nej',
      retry: 'Börja om!',
      doYouWantToKnowMore: 'Vill du lära dig mer om ditt Twitter-konto?',
      discoverOtherFeatures: 'Upptäck fler funktioner',
    },

    /* Features listing page */
    features: {
      title: 'Funktioner',
      description: 'Upptäck alla våra funktioner för att veta allt om ditt Twitter-konto.',
      searchFeatures: 'Sök på funktioner... (ex: Top Friends, Valentine...)',
      noFeatureFound: 'Tyvärr matchar inga funktioner den här sökningen... 😔',
      resetSearch: 'Nollställ sökning',
      letsGo: 'Då kör vi!',
    },

    /* Beta program page */
    'beta-program': {
      title: 'Betaprogrammet',
      description: 'Gå med i Betaprogrammet gratis och prova våra betafunktioner innan de släpps offentligt för alla!', // TODO
      betaProgramDescription: "Betaprogrammet har skapats för att testa nya funktioner innan de släpps offentligt för att försäkra oss om de fungerar som de ska. Genom att delta i programmet kommer du att kunna testa dem.", // TODO
      currentBetaFeatures: 'För närvarande finns det {amount} {features} i Betaprogrammet:', // TODO
      noCurrentBetaFeatures: 'Just nu finns inga funktioner i Betaprogrammet, men fler är på väg!', // TODO
      fewThingsToKnow: 'Några saker att veta om Betaprogrammet:', // TODO
      li1: "Det kostar INGENTING", // TODO
      li2: "Det finns ett begränsat antal platser", // TODO
      li3: 'Du kan lämnade när du vill', // TODO
      li4: 'Dedikerat & prioritetssupport på Twitter via DM', // TODO
      li5: 'Betafunktioner kanske inte fungerar som förväntat', // TODO
      li6: 'Betafunktioner kan ändras närsomhelst', // TODO
      thanksForInterest: 'Tack för ditt intressa i Betaprogrammet 💜', // TODO
      alreadyApplied: "Du är redan i Betaprogrammet,<br />tack så mycket för ditt intresse 💜", // TODO
      leaveBetaProgram: 'Lämna Betaprogrammet', // TODO
      leavingTerms: "Om du lämnar Betaprogrammet kommer du inte kunna gå med det igen ifall tillgängliga platser tar slut.", // TODO
      placesAvailable: '500 platser tillgängliga! 🎟', // TODO
      accountEligible: 'Ditt konto är berättigat att gå med i Betaprogrammet och några platser finns tillgängliga!', // TODO
      yourEmailAddress: 'Din epostaddress...', // TODO
      applyForFree: 'Gå med gratis', // TODO
      applyTerms: 'Genom att gå med i Betaprogrammet accepterar du aviseringar & kampanjer i e-post (maximalt 1 i veckan).', // TODO
      noPlaceAvailable: 'Ingen plats tillgänglig 😕', // TODO
      betaProgramFull: "Tyvärr är Betaprogrammet fullt och vi kan inte ge dig gratis tillgång nu, du kan dock fortfarande försöka få det med hjälp av metoderna i nästa block!", // TODO
      keepUpdated: 'Vi berättar för dig när ny tillgång finns tillgängligt på {ourTwitterAccount}.', // TODO
      ourTwitterAccount: 'vårt Twitter-konto', // TODO
      or: 'eller', // TODO
      earnYourAccess: 'Tjäna till tillgång! 🎁', // TODO
      writeReview: '#1 — Skriv en recension om oss {onTrustpilot} och bifoga dess länk på vårt Twitter-konto via DM, sen ger vi dig tillgång.', // TODO
      onTrustpilot: 'på Trustpilot', // TODO
      winContest: 'eller #2 — Delta i våra tävlignar på {ourTwitterAccount} för att vinna tillgången, följ oss och slå på aviseringar för att hålla dig uppdaterad.', // TODO
      randomDraws: 'Varenda en av dessa tävlingar slutar med ett slumpmässigt utlottande på {pickaw}, så har alla en chans att vinna.', // TODO
      welcomeToTheBetaProgram: 'Välkommen till Betaprogrammet! Nu kan du testa våra Betafunktioner 😊', // TODO
      seeYouSoonBetaProgram: 'Tack för ditt deltagange i Betaprogrammet, vi ser fram emot att se dig igen snart!', // TODO
    },

    /* Legal page */
    legal: {
      title: 'Lagrelaterat',
      description: 'Information om oss och kakor.',
      intro: 'I enlighet med Article 6 i lagen n° 2004-575 från 21 juni 2004 angående tillit i den digitala ekonomin informeras användare av sidan {site} om identiteten på de olika partierna inblandade i dess implementering och övervakning:',
      owner: 'Ägare',
      creator: 'Skapare',
      publisher: 'Publiceringsmanager',
      publisherText: 'Personen ansvarig för publiceringen är en naturlig person.',
      webmaster: 'Webmaster',
      host: 'Värd',
      requestAddress: 'Hela adressen tillgänglig vid förfrågan genom e-post på {email}.',
      warningCookies: 'Om kakor',
      p1: 'En kaka är en liten textfil sänd till din webbläsare genom hemsidan du visar. Med denna bevaras information om ditt besök på hemsidan, exempelvis ditt föredragna språk och andra inställningar. Detta kan underlätta i ditt nästa besök på sidan och göra det mer användbart för dig. Kakor spelar en viktig roll, för utan dem skulle internet kunna vara mycket mer frustrerande.',
      t1: 'Vad är den applicerbara rättsliga ramen?',
      p2: "I enlighet med Article 5(3) of Directive 2002/58/EC by adopting Directive 2009/136/EC har den europeiska lagstiftaren lakt ned principen att bevaringen av information på en användares utrustning eller tillgång till finromation redan bevaras och ska enbart behandlas med användarens medgivande i förhand, om inte dessa handlingar är strängt nödvändiga för att ge en tjänst som uttryckligen förfrågas av användaren. Article 32-II i lagen 6 januari 1978 tar över denna principen.",
      t2: 'Denna sida använder kakor för följande syften:',
      'l1-1': 'För att hjälpa oss känna igen din webbläsare och läsa preferenserna du har ställt in under tidigare besök på den här hemsidan',
      'l1-2': 'För att hjälpa oss mäta och studera effektiviteten på vårt onlineinteraktivitetsmaterial, funktioner, reklam och andra kommunikationer',
      'l1-3': 'För att bevaka den analytiska datan på sidan, användningen gjort på sidan av användare och för att förbättra tjänsterna och materialet på denna hemsidan.',
      t3: 'Hur raderar jag kakor länkade till min webbläsare?',
      p3: "Du kan välja att avaktivera kakor i din webbläsare närsomhelst genom att följa instruktionerna som kommer med läsarens hjälpfiler. Du kan också ställa in dina kakor direkt i läsarens inställningar:",
    },

    /* Terms of service page */
    terms: {
      title: 'Användarvillkor',
      description: 'Läsa våra allmänna villkor och användningskrav.',
      h1: 'Villkor',
      p1: 'Genom att åtkomma hemsidan på {url} godkänner du att följa dessa användarvillkor, alla applicerbara lagar och föreskrifter, samt ansvarar du för att följa de lagar som appliceras lokalt. Godkänner du ej dessa villkor föbjuds du från att använda eller komma åt denna hemsida. Materialet som bevaras här skyddas av applicerbara lagar som angår ensamrätt och varumärken.',
      h2: 'Licensanvändning',
      'l1-1': "Tillstånd ges att tillfälligen ladda ner en kopia av den material (information eller mjukvara) på Affinitweets hemsida för personal, enbart för icke-kommersiellt övergående visningar. Detta är inte en titelsöverföring, utan ett licensgivande i vilket du förbjuds från att:",
      'l2-1': 'modifiera eller kopiera materialet;',
      'l2-2': 'använda materialet för något kommersiellt syfte, eller för vilken offentlig visning som helst (kommersiellt eller ej);',
      'l2-3': "försöka dekompilera eller demontera någon mjukvara som behålls på Affinitweets hemsida;",
      'l2-4': 'radera någon ensamrätt eller andra proprietära notationer från materialet; eller',
      'l2-5': 'transferera materialet till en annan person eller "spegla" det på någon annan server.',
      'l1-2': 'Denna licens kommer automatiskt utgå ifall du bryter mot någon av dessa begränsningar och kan stängas av av Affinitweet närsomhelst. Vid avstänging av ditt materialvisande eller licensens makulering måste du radera allt nedladdat material som du äger vare sig det är elektroniskt eller i utskrivet format.',
      h3: 'Varning',
      'l3-1': "Materialet på Affinitweets hemsida ges med en 'som det är' grund. Affinitweet gör inga garrantier vare sig uttryckligen eller underförstått, härmed ifrågasättningar och förnekar alla andra garantier inklusive, men inte begränsat till antydda garantier eller säljbarhetsvillkor, passande för ett särskilt syfte, eller icke-överträdande på immateriella rättigheter samt rättighetsbrott.",
      'l3-2': 'Förutom det har Affinitweet varken garanti eller representationen som angår träffsäkerheten, troliga resultat, eller pålitligheten över hemsidans material eller annars relaterat till sådant material, eller ens några sidor länkade till denna.',
      h4: 'Begränsningar',
      p2: "Affinitweet ansvarar under inga omständigheter för skador (bland annat skador för dataförlust eller vinst, eller pga. störande av affärer) från användningen eller oförmågan att använda materialet på Affinitweets hemsida, även om Affinitweet eller en Affinitweet-auktoriserad representant har notifierats oralt eller skriftligt om möjligheterna till sådan skada. Eftersom vissa jurisdiktioner inte tillåter begränsningar på antydda garantier eller begränsningar till ansvar för konsekventiella eller incidentiella skador kan det hända att dessa begränsningar inte gäller för dig.",
      h5: 'Materialets träffsäkerhet',
      p3: "Materialet som visas på Affinitweets hemsida kan innehålla tekniska, typografiska, eller fotografiska fel. Affinitweet garanterar inte att något av dess material på hemsidan är träffsäkert, färdigt eller nuvarande. Affinitweet kan göra ändringar på det material som finns på dess sida närsomhelst utan förvarning. Affinitweet kan däremot inte lova att materialet uppdateras.",
      h6: 'Länkar',
      p4: "Affinitweet har inte recenserat alla sidorna som länkas på dess sida och ansvarar ej för det material på de länkade sidorna. Innehållet av någon sådan länk innebär ej att Affinitweet stödjar sidan. Användandet av sådana länkar är på användarens egen risk.",
      h7: 'Modifieringar',
      p5: 'Affinitweet kan ändra sin hemsidas villkor närsomhelst utan förvarning. Genom att använda den här sidan godkänner du att bindas av den nuvarande versionen av dessa användarvillkor.',
      h8: 'Styrande lag',
      p6: 'Dessa villkor och krav styrs av och konstrueras enligt Frankrikes lagar och du framhåller till den exklusiva jurisdiktionen för den statens eller platsens domstolar.',
    },

    /* Data and privacy page */
    privacy: {
      title: 'Data och integritet',
      description: 'Information på hur vi hämtar, analyserar och bevarar din data.',
      intro: 'Vi tar allvarligt på datasekretessen och angående vårt arbete, vi vill informera våra användare om vad vi gör med det. Nedan hittar du all nödvändig information som angår bevaringen och processeringen av denna data. Information om kakor finns också tillgängligt på {thatPage}.',
      storage: 'Bevaring',
      personalData: 'Personlig data',
      p1: 'När du loggar in på Affinitweet samlar vi in den information vi behöver från din Twitter-profil för att kunna erbjuda dig våra tjänster. Bland detta bevarar vi:',
      'l1-1': 'ditt unika Twitter-ID',
      'l1-2': 'ditt användarnamn (@)',
      'l1-3': 'ditt namn',
      'l1-4': 'din autentiseringstoken',
      'l1-5': 'din hemlighet till autentiseringstoken',
      'l1-6': 'ditt språk',
      p2: 'Den andra informationen du kan se på din profil bevaras tillfälligen under din session, logga bara ut för att ta bort det.',
      i1: 'Information: denna data kan raderas helt och omedelbart genom att helt enkelt klicka på {button} längst nere på {yourProfile}.',
      results: 'Resultat',
      p3: 'Som standard bevarar inte Affinitweet den resultat av det du gör. Du kan dock aktivera alternativet för historik över dina resultat på din profil. Bland allt detta bevarar vi:',
      'l2-1': 'användaren som resultaten tillhör',
      'l2-2': 'materialets namn',
      'l2-3': 'resultatets tidsstämpel',
      i2: 'Information: denna data kan raderas helt och omedelbart genom att helt enkelt klicka på {button} längst nere på {yourProfile}.',
      computing: 'Bearbetning',
      p4: 'När du använder de olika materialen som finns på hemsidan ringer vi upp Twitter API:t med dina tidigare bevarare tokens.',
      i3: 'Information: vi använder dina tokens för att kunna vara så träffsäkra vi kan med våra resultat. Det vill säga, om du exempelvis följer en eller fler användare med ett skyddat konto kommer vi att kunna inkludera dem i resultatet vid behov.',
      p5: "Detta kan vi ledas till att få:",
      'l3-1': 'din feed',
      'l3-2': 'dina (re-)tweets',
      'l3-3': 'dina omnämningar',
      'l3-4': 'dina följare',
      'l3-5': 'de du följer',
      p6: 'Denna information samlas och processeras enbart, vi bevarar inte det.',
      publish: 'Publicering',
      p7: 'När du loggar in på Affinitweet frågar vi om enkelt läsbehörighet till ditt konto samt skrivbehörighet. Vi kommer inte att uföra handlingar utan ditt medgivande om inte ett särskilt alternativ på sidan är aktiverat.',
      i4: 'Information: du kan återta behörigheten du gett oss när du loggade in närsomhelst via din {yourTwitterProfile}.',
      autoTweet: 'Automatisk tweet',
      p8: 'För att kunna använda vissa funktioner kan vi behöva be dig aktivera alternativet för automatiska tweetresultat. Går du med på att aktivera det kommer en tweet publiceras för varje resultat med den genererade bilden.',
      i5: 'Information: du kan avaktivera detta alternativ närsomhelst {yourProfile} i {button}-avdelningen.',
      question: 'Några frågor?',
      p9: 'Har du några frågor om Affinitweet så var inte rädd för att kontakta oss via Twitter eller e-post, det nöjer oss verkligen att ge dig svar!',
      thatPage: 'denna sida',
      yourProfile: 'din profil',
      yourTwitterProfile: 'din Twitterprofil',
    },

  },

  /* Errors */
  _er: {
    cooldown: 'Detta material har en %{cooldown} sekunders nedkylning. Var god försök igen om:',
    unknown: 'Ett fel har uppstått. Vårt team har notifierats.',
    unknownFeature: 'Okänt material.',
    unavailableFeature: 'Otillgängligt material.',
    betaFeature: "You can't use beta features until you're appart of the Beta program.", // TODO
    invalidEmail: 'Email is invalid.', // TODO
    selfUsername: 'Skriv ett annat användarnamn än dig själv.',
    badUsername: 'Dåligt användarnamn.',
    notEnoughData: 'Inte tillräckligt med data.',
    accountProtected: 'Du kan inte använda detta material medan ditt konto är skyddat.',
    targetAccountProtectedAndNotFollowing: "You can't use this feature because the targeted user is protected and not following you.", // TODO
    refreshPage: 'Vänligen ladda om sidan.',
    timeout: 'Timeout pågick för länge.',
    twitterError: 'Twitter skickade ett fel:',
    twitterErrors: {
      32: 'Kunde inte autentisera dig.',
      34: 'Ledsen, den sida existerar inte.',
      50: 'Användare hittades ej.',
      63: 'Användaren har avlysats.',
      64: 'Ditt konto är avlysat och har inte tillåtelse att använda detta material.',
      87: 'Klienten har inte tillåtelse att utföra denna handling.',
      88: 'Rate limit exceeded. Försök igen om 15 minuter',
      89: 'Ogiltigt eller utgånget token. Vänligen koppla upp dig igen.',
      99: 'Kan inte verifiera dina referenser.',
      130: 'Över kapaciteten.',
      131: 'Internt fel.',
      135: 'Kunde inte autentisera dig.',
      144: 'Inget status funnet med det ID:et.',
      179: 'Ledsen, du är inte auktoriserad för att se denna status.',
      185: 'Användaren är över gränsen för dagliga statusuppdateringar.',
      186: 'Tweeten behöver vara lite kortare.',
      187: 'Statusen är en kopia.',
      220: 'Dina referenser ger inte tillgång till denna resurs.',
      261: 'Applikationen kan inte genomföra skrifthandlingar.',
      326: 'För att skydda våra användare från spam och annan skadlig aktivitet har detta konto tillfälligen låsts.',
    },
  },

}

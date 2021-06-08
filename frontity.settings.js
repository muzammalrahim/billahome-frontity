const settings = {
  "name": "home",
  "state": {
    "frontity": {
      "url": "http://billahomes.com",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "frontity-chakra-theme",
      "state": {
        "theme": {
          "menu": [
            {
              name: 'Home',
              link: '/',
			      submenu: [
                {
                  name: 'ABOUT',
                  link: '/about/'
                },
                {
                  name: 'CONTACT',
                  link: '/contact/'
                },
                {
                  name: 'FAQS',
                  link: '/faqs/'
                }
              ]
			  
            },
            {
              name: 'BUY PROPERTY',
              link: '/all-properties/'
            
            },
         
			      {
              name: 'RENT PROPERTY',
              link: '/category/travel/',
             
            },
			      {
              name: 'BILLAHOME',
              link: '#',
              submenu: [
                {
                  name: 'AGENTS',
                  link: '/agents/'
                },
                {
                  name: 'AGENCIES',
                  link: '/agencies/'
                },
                {
                  name: 'MEMBERSHIP INFO',
                  link: '/'
                }
              ]
            },
			      {
              name: 'BLOGS',
              link: '/blog/',
              submenu: [
                {
                  name: 'Retirement Planning',
                  link: '/category/retirement/retirement-planning/'
                },
              
              ]
            }
      
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "http://billahomes.com"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
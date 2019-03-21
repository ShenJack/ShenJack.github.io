# Working Hours Plugin - UI Improvements
## Abstract

The current Working Hour Plugin provides an interface to set up a schedule of allowable build times but the user interface and usability still need enhancement. Thus a new user interface based on new technologies like **React** could be used to optimize user experience and code readability.

## Content


### Intro
Shen Jack

Beijing Forestry University

357875929@qq.com

+86 13261370833

In this period of time, I’ve got familiar with this plugin on both UI and service in the backend. I also come up with a PR about pipeline validation, and it finally was merged successfully.
### Current Status
UI currently used by Working Hour Plugin lacks usability. After these days of experience, I found the some improvements could be done , which is as below.

1. A date picker could be used to simplify the way to choose a excluded date, rather than input a text with fixed format(M/d/y).

2. A repetition choice could be added to avoid some date being added repeatedly.

3. Some holidays are fixed on a solid date every year. The system could provide some presets automatically or from a dropdown select component.

4. Provide ability to add holidays which is not based on Gregorian calendar.	

I’ve prepared two versions of **React**-based plugin configure application, which are available at my github pages : 
1. [Working Hour Example(Built with webpack)](https://shenjack.github.io/working-hour-example/webpack)
2. [Working Hour Example(Html based)](https://shenjack.github.io/working-hour-example/html/)

These application complete the improvements above except #4, which I’m still trying to complete.

The webapp's data structure is as blow:
```json
{
    "name": "Thanksgiving Day", //date name
    "startDate": {
        "dynamic": true, // date like 'the 4th thursday of november'
        "date": {},      // the date object if it's static 
        "dynamicDate": { // the dynamic date's data
            "month": 11,
            "week": 4,
            "day": 4
        }
    },
    "endDate": {
        "dynamic": false,
        "date": {},
        "dynamicDate": {
            "month": 1,
            "week": 1,
            "day": 1
        }
    },
    "noEnd": true,      //no ending date, if false, repeat won't stop until the endDate field
    "repeat": true,     // is it repeat?
    "repeatCount": -1,  //repeat how many times to stop, -1: won't stop
    "repeatInterval": 1,//repeat each {interval} day/week/month/year
    "repeatPeriod": 3,  //0:daily 1:weekly 2:monthly 3:yearly
}
```

Then we need to pay attention on the possibility to integrate it with ****Jenkins** plugin framework** , because **Jenkins** plugin is based on **Jelly**, the whole work flow is like a template, what we configure in our plugins would be parsed by **Jenkins**, then display in the slots left by **Jenkins**. As a result, it’s hard to customize.

At the beginning, I thought **Jenkins** would provide an environment to support ****React**** development, however, may be some historical issues, this was proved to be wrong at the end. Looking though **Jenkins**’ official plugins repositories, none was made with ****React****., except Blueocean. Blueocean even provides node.js-based plugin develop and running support.
So, I’m confused that if these plugin should support Blueocean, in another way, I just wish Blueocean to be the official UI, but it seems to be a long way.
As a conclusion, maybe we need to add dependencies on ourselves, and this is why the second version Working Hour Example(Html based) is presented. As a proof of fact, **Jelly** is compatible with html, that is to say, writing html tags in **Jelly** is gonna work.

Then let’s suppose that we succeeded in providing a ****React****-based UI for setting, how should data like following be collected and sent. One thing that need consideration is that we can’t send a save post once the data is changed, instead we need to wait until the global save button is clicked, that is to say, we must use the global get and set request.

Thus it seems there is no direct api we could use. But I have got a tricky idea which may be a little ugly:
1. Use **Jelly** to render our data to value of html elements (temporarily called “data container”)but add “display:none”
2. Then the new UI parse these elements and get the data.
3. Once the data got edited, set a coordinate value to the “data container” like we are modifying the legacy form.
4. Then the global save function could gather information from the “data container”, but we actually edit it with a agency.

I also tried this solution, in the following repository.

[Working Hours Plugin Javascrip Impl](https://github.com/ShenJack/working-hours-javascript-impl
)

More details could be found in [Readme](https://github.com/ShenJack/working-hours-javascript-impl/blob/master/README.md).


### What I'm going to do
#### Backend
1. Intergates the front app (html,js) into the plugin's jelly file.
2. Complete the judge function(whether to exclude) as robust as possible. 
3. Data validation.
4. Write tests.

#### Fontend
1. Complete the left features and perhaps come up with more ideas.
2. Optimize the front app to minimize the memory and storage that it would use.
3. Change layouts to adapt it with the configure page.
4. Write tests.

### Long Term Goal

1. Package this data transfer solution to support more plugins. Or propose with a better solution.
2. Integates modern frontend develop vendors like React,Vue into jenkins to opitimize plugin develop experience.

I personally want to do this project because I enjoy hacking problems. And seeing plugins newly released like blueocean, I believe jenkins itself also need update. I wish that I can contribute some of my strengh.

Thanks for reading my proposal. Please forgive my wording, if there are any questions or advices, feel free to contact me, I'd be appreciated.

Yours sincerely.
*Scheduling is easy to do if you are willing to do it inefficiently.*

Doing scheduling inefficiently means one or both of the following:

  * You invest a lot of time and/or money.
  * You fail frequently.
  
The [Oahu Community Correctional Center](http://dps.hawaii.gov/about/divisions/corrections/occc/) currently attempts to schedule approximately 350 visits per week through a single phone line and a spreadsheet. This is "inefficient scheduling" in both senses:  OCCC staff spend over 30 hours a week on the phone with potential visitors, and many visitors fail to visit their loved one due to an inability to get through to OCCC staff, or because they failed to understand and comply with requirements for visitation. This has health and safety implications: visitation is a key part of the rehabilitation process, so improving scheduling might actually improve correctional outcomes. 
   
Kipa's design takes into account the following issues in OCCC scheduling:

* OCCC detainees are allowed up to 12 visitors, and must provide staff with those names. 
* Visitors must submit documentation to OCCC in order to be authorized to request visits. 
* Once authorized, visitors and OCCC staff must agree upon a 30 minute time slot during the next seven days.
* Visitors must dress appropriately and bring additional documentation at the time of the visit.
* Unpredictable changes in staffing resources means that visits might be cancelled at the last minute. 
* There are over 6,000 potential visitors, and the pool of visitors is constantly changing as detainees enter and exit OCCC.

### Benefits

Our vision for Kipa is to create technology that reduces the time, expense, and failure rate for OCCC visitation scheduling.

#### Benefits to visitors

While the phone line will still be available, most visitors will not need to use it. Instead, they will use Kipa (via a desktop computer or mobile phone) to guide them through the scheduling process. 

Recognizing that the OCCC visitor population varies broadly in technological sophistication, the Kipa system will use text messaging whenever possible for communication with visitors.  For example, Kipa will automatically generate a text message to visitors when:

* A visitor has become authorized to request visits. The text message will provide instructions on how to start requesting visits.
* A visitor's request for a visit has been approved. The text message will indicate the time and date of the approved visit.
* The day of a visit has arrived. The text message will remind them of the time, the required dress code, and required documentation.
* A scheduled visit must be cancelled due to OCCC staffing issues or other problems. The text message will tell the visitor that the visit has been cancelled and provide instructions on how to reschedule.

#### Benefits to OCCC staff

One goal is a dramatic reduction in the need to schedule visits via the phone. Although phone-based scheduling will still be available, we believe that text message-enabled phones are available to almost all of the visitor population, and that they will find this a faster, more effective, less error prone, and less stressful way to manage visits with their loved ones. 

A second goal is to reduce non-compliance with OCCC policies regarding visitation. Visitors will have easier access to rules regarding documentation and dress code, and the system will automatically generate reminders on the day of the visit.  

A third goal is to simplify visit cancellation procedures.  If an unforeseen event results in cancellation of one or more visitation sessions, OCCC staff can use Kipa to generate text messages to visitors informing them of the cancellation and providing instructions on how to reschedule. 

## Kipa in action

Kipa currently implements a workflow based on about a dozen pages. A Kipa user is either a "visitor" (someone who wishes to visit a detainee)or an "admin" (an OCCC staff person). 

Both visitors and admin start at the following landing page:

![](https://github.com/HACC2016/teamkipa/raw/master/doc/screenshots/landing.png)

Admins and registered users can press the button to go to the login page:  

![](https://github.com/HACC2016/teamkipa/raw/master/doc/screenshots/login.png)

New visitors must register:

![](https://github.com/HACC2016/teamkipa/raw/master/doc/screenshots/visitor-request-authorization.png)

A new user, once they submit their information, must wait to be authorized by OCCC staff. During that time their home page displays this:

![](https://github.com/HACC2016/teamkipa/raw/master/doc/screenshots/visitor-authorization-pending.png)

If OCCC staff approve the request, the home page enables them to make a visit request:

![](https://github.com/HACC2016/teamkipa/raw/master/doc/screenshots/visitor-reserve-visit.png)

According to OCCC staff, it is OK for such requests to be immediately approved. So, the home page shows the following after selecting a visit time:

![](https://github.com/HACC2016/teamkipa/raw/master/doc/screenshots/visitor-visit-pending.png)

And the visitor immediately receives a text message informing them of the reservation:

![](https://github.com/HACC2016/teamkipa/raw/master/doc/screenshots/visitor-text-message.jpg)

Text messages are also generated in other situations.

The user can cancel and re-reserve visits as they like during the seven day interval.

Once the visit has happened, the home page goes back to enabling them to reserve a new visit.

This workflow involves interaction with OCCC staff for approval processing. After logging in, admins view the "Week" page, which shows the schedule of reserved visits for the next seven days:

![](https://github.com/HACC2016/teamkipa/raw/master/doc/screenshots/admin-week.png)

An admin can click on the name of a user on this page to find out their details, to cancel their visit, or deauthorize them (which means they can no longer make visits):

![](https://github.com/HACC2016/teamkipa/raw/master/doc/screenshots/admin-manage-visitor.png)

Admins can also view the schedule for a single day, in a printable fashion:

![](https://github.com/HACC2016/teamkipa/raw/master/doc/screenshots/admin-day.png)

Finally, admins can view the list of visitors who have registered with the system. Once their documentation has been received and processed, the admin can click on the user name to go to the manage visitor page and authorize them to reserve visits:

![](https://github.com/HACC2016/teamkipa/raw/master/doc/screenshots/admin-authorize.png)

## Screencast of live system

Click the image below to watch a 1 minute screencast illustrating live updating and text messaging:

[<img src="https://github.com/HACC2016/teamkipa/raw/master/doc/screenshots/kipa-youtube.png" width="600">](https://www.youtube.com/watch?v=COLaTvaCj7U)


## Installation

Download and install the latest version of [Meteor](https://www.meteor.com/).

Bring up a shell, and cd into the app directory.

To run locally:

```
meteor npm install
meteor
```

## Deployment

Kipa is currently deployed to [Galaxy](http://galaxy.meteor.com).  To successfully deploy to Galaxy, invoke the following command from within the app/ directory:

```
DEPLOY_HOSTNAME=galaxy.meteor.com meteor deploy kipa.meteorapp.com --settings ../settings/settings.json --owner philipmjohnson
```

Note that for this command to work:

  * You need to have a settings/settings.json file. See the file settings/sample.settings.json for hints on how to construct this file.

  * You need to be authorized to deploy to philipmjohnson's galaxy account.  See Philip for details.
  
## Live prototype

A prototype is deployed at: [http://kipa.meteorapp.com](http://kipa.meteorapp.com)
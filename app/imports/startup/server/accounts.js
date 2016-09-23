import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';
import { Visitors } from '../../../imports/api/visitor/visitors';
import '../../../imports/api/visitor/methods';

/* eslint-disable no-console */

const visitors = [{ firstname: 'Margo', lastname: 'Casey', phonenumber: '808-514-9157', allowtexts: true, detaineefirstname: 'Kameron', detaineelastname: 'Loyd', detaineestateid: '3319-6405', state: 'authorized', dateofbirth: '7/12/1927', userid: 0, pin: '5836', isfemale: false },
  { firstname: 'Rue', lastname: 'Christabel', phonenumber: '808-532-6661', allowtexts: true, detaineefirstname: 'Maynard', detaineelastname: 'Amery', detaineestateid: '9789-7249', state: 'unauthorized', dateofbirth: '7/20/1947', userid: 0, pin: '3732', isfemale: false },
  { firstname: 'Jules', lastname: 'Regan', phonenumber: '808-539-5650', allowtexts: true, detaineefirstname: 'Ted', detaineelastname: 'Hiroki', detaineestateid: '8867-4864', state: 'unauthorized', dateofbirth: '11/4/1997', userid: 0, pin: '1359', isfemale: false },
  { firstname: 'Rong', lastname: 'Joslyn', phonenumber: '808-599-8172', allowtexts: true, detaineefirstname: 'Garnett', detaineelastname: 'Kenzie', detaineestateid: '3550-7829', state: 'unauthorized', dateofbirth: '8/28/1923', userid: 0, pin: '6568', isfemale: false },
  { firstname: 'Nettie', lastname: 'Sukie', phonenumber: '808-590-8921', allowtexts: true, detaineefirstname: 'Tex', detaineelastname: 'Ralph', detaineestateid: '2660-8968', state: 'unauthorized', dateofbirth: '9/10/1954', userid: 0, pin: '4860', isfemale: false },
  { firstname: 'Fen', lastname: 'Janey', phonenumber: '808-505-9977', allowtexts: true, detaineefirstname: 'Maxwell', detaineelastname: 'Rickey', detaineestateid: '4372-4537', state: 'unauthorized', dateofbirth: '10/17/1932', userid: 0, pin: '1201', isfemale: false },
  { firstname: 'Robena', lastname: 'Sharon', phonenumber: '808-102-0149', allowtexts: true, detaineefirstname: 'London', detaineelastname: 'Denton', detaineestateid: '7018-7772', state: 'authorized', dateofbirth: '5/10/1936', userid: 0, pin: '0690', isfemale: false },
  { firstname: 'Chihiro', lastname: 'Lily', phonenumber: '808-325-8536', allowtexts: true, detaineefirstname: 'Ralph', detaineelastname: 'Cree', detaineestateid: '8893-6447', state: 'unauthorized', dateofbirth: '10/19/1955', userid: 0, pin: '3323', isfemale: false },
  { firstname: 'Kat', lastname: 'Deena', phonenumber: '808-179-9675', allowtexts: true, detaineefirstname: 'Tibby', detaineelastname: 'Mitchell', detaineestateid: '5787-3670', state: 'unauthorized', dateofbirth: '6/4/1951', userid: 0, pin: '8266', isfemale: false },
  { firstname: 'Kimberlee', lastname: 'Martina', phonenumber: '808-463-1477', allowtexts: true, detaineefirstname: 'Guanting', detaineelastname: 'Monroe', detaineestateid: '6771-6835', state: 'unauthorized', dateofbirth: '9/11/1935', userid: 0, pin: '0179', isfemale: false },
  { firstname: 'Xue', lastname: 'Alita', phonenumber: '808-348-5069', allowtexts: true, detaineefirstname: 'Devin', detaineelastname: 'Arlen', detaineestateid: '3007-2065', state: 'unauthorized', dateofbirth: '8/24/1914', userid: 0, pin: '7281', isfemale: false },
  { firstname: 'Pernel', lastname: 'Richelle', phonenumber: '808-224-5849', allowtexts: true, detaineefirstname: 'Haywood', detaineelastname: 'Tsubasa', detaineestateid: '9513-6880', state: 'authorized', dateofbirth: '11/5/1911', userid: 0, pin: '2612', isfemale: false },
  { firstname: 'Lecia', lastname: 'Tresha', phonenumber: '808-363-8781', allowtexts: true, detaineefirstname: 'Elwood', detaineelastname: 'Jaydon', detaineestateid: '2529-7422', state: 'unauthorized', dateofbirth: '9/16/1925', userid: 0, pin: '1276', isfemale: false },
  { firstname: 'Wilburn', lastname: 'Travis', phonenumber: '808-485-9913', allowtexts: true, detaineefirstname: 'Rio', detaineelastname: 'Charley', detaineestateid: '5113-8473', state: 'unauthorized', dateofbirth: '2/19/1919', userid: 0, pin: '0036', isfemale: true },
  { firstname: 'Curtis', lastname: 'Mikala', phonenumber: '808-537-7312', allowtexts: true, detaineefirstname: 'Jun', detaineelastname: 'Zara', detaineestateid: '0985-9134', state: 'authorized', dateofbirth: '7/13/2007', userid: 0, pin: '1184', isfemale: true },
  { firstname: 'Haydn', lastname: 'Leslie', phonenumber: '808-150-1096', allowtexts: true, detaineefirstname: 'Odelia', detaineelastname: 'Elouise', detaineestateid: '7682-1997', state: 'unauthorized', dateofbirth: '4/26/1943', userid: 0, pin: '0794', isfemale: true },
  { firstname: 'Gallagher', lastname: 'Manuel', phonenumber: '808-442-2834', allowtexts: true, detaineefirstname: 'Harrietta', detaineelastname: 'Lyla', detaineestateid: '2480-0117', state: 'unauthorized', dateofbirth: '4/17/1910', userid: 0, pin: '8303', isfemale: true },
  { firstname: 'Quinten', lastname: 'Stan', phonenumber: '808-163-4385', allowtexts: true, detaineefirstname: 'Yaling', detaineelastname: 'Celinda', detaineestateid: '7427-0016', state: 'authorized', dateofbirth: '10/9/1962', userid: 0, pin: '8329', isfemale: true },
  { firstname: 'Leighton', lastname: 'Drogo', phonenumber: '808-272-1237', allowtexts: true, detaineefirstname: 'Merletta', detaineelastname: 'Magdalena', detaineestateid: '2994-4536', state: 'authorized', dateofbirth: '12/24/2003', userid: 0, pin: '9397', isfemale: true },
  { firstname: 'Linden', lastname: 'Ayden', phonenumber: '808-557-6859', allowtexts: true, detaineefirstname: 'Lyndsey', detaineelastname: 'Roslyn', detaineestateid: '8379-9387', state: 'authorized', dateofbirth: '1/10/1990', userid: 0, pin: '9839', isfemale: true },
  { firstname: 'Ayden', lastname: 'Michi', phonenumber: '808-459-5959', allowtexts: true, detaineefirstname: 'Garnet', detaineelastname: 'Flick', detaineestateid: '7862-9784', state: 'unauthorized', dateofbirth: '12/24/1999', userid: 0, pin: '7579', isfemale: true },
  { firstname: 'Niles', lastname: 'Ross', phonenumber: '808-543-1468', allowtexts: true, detaineefirstname: 'Aggie', detaineelastname: 'Mandy', detaineestateid: '3124-4960', state: 'unauthorized', dateofbirth: '3/14/1993', userid: 0, pin: '0542', isfemale: true },
  { firstname: 'Tranter', lastname: 'Caden', phonenumber: '808-409-4393', allowtexts: true, detaineefirstname: 'Reannon', detaineelastname: 'Lizette', detaineestateid: '3493-1302', state: 'unauthorized', dateofbirth: '11/13/1900', userid: 0, pin: '3379', isfemale: true },
  { firstname: 'Jonny', lastname: 'Colton', phonenumber: '808-359-0046', allowtexts: true, detaineefirstname: 'Davena', detaineelastname: 'Jonie', detaineestateid: '0777-5207', state: 'authorized', dateofbirth: '1/28/1960', userid: 0, pin: '1247', isfemale: true },
  { firstname: 'Maui', lastname: 'Hervey', phonenumber: '808-152-6136', allowtexts: true, detaineefirstname: 'Barb', detaineelastname: 'Abigail', detaineestateid: '8975-8026', state: 'unauthorized', dateofbirth: '8/26/1910', userid: 0, pin: '5447', isfemale: true },
  { firstname: 'Willard', lastname: 'Oz', phonenumber: '808-195-5288', allowtexts: true, detaineefirstname: 'Tennyson', detaineelastname: 'Marty', detaineestateid: '5177-8566', state: 'unauthorized', dateofbirth: '9/14/1916', userid: 0, pin: '6283', isfemale: false },
  { firstname: 'Tyrrell', lastname: 'Grier', phonenumber: '808-488-9172', allowtexts: true, detaineefirstname: 'Duke', detaineelastname: 'Kelsey', detaineestateid: '8322-5415', state: 'unauthorized', dateofbirth: '12/22/1916', userid: 0, pin: '8958', isfemale: false },
  { firstname: 'Kun', lastname: 'Hayate', phonenumber: '808-591-9765', allowtexts: true, detaineefirstname: 'Dustin', detaineelastname: 'Bram', detaineestateid: '9712-3649', state: 'unauthorized', dateofbirth: '1/31/1978', userid: 0, pin: '0538', isfemale: false },
  { firstname: 'Hugh', lastname: 'Lei', phonenumber: '808-389-9090', allowtexts: true, detaineefirstname: 'Orson', detaineelastname: 'U-Jin', detaineestateid: '6171-2681', state: 'authorized', dateofbirth: '5/27/1983', userid: 0, pin: '8626', isfemale: false },
  { firstname: 'Rigby', lastname: 'Makana', phonenumber: '808-427-7478', allowtexts: true, detaineefirstname: 'Charlton', detaineelastname: 'Kendrick', detaineestateid: '6737-3715', state: 'unauthorized', dateofbirth: '10/24/1967', userid: 0, pin: '9756', isfemale: false },
  { firstname: 'Camden', lastname: 'Howie', phonenumber: '808-363-6436', allowtexts: true, detaineefirstname: 'Colton', detaineelastname: 'Kiaran', detaineestateid: '9998-0135', state: 'unauthorized', dateofbirth: '2/19/1929', userid: 0, pin: '8842', isfemale: false },
  { firstname: 'Konnor', lastname: 'Takeshi', phonenumber: '808-355-7963', allowtexts: true, detaineefirstname: 'Bertram', detaineelastname: 'Jerome', detaineestateid: '7717-7686', state: 'unauthorized', dateofbirth: '12/18/1992', userid: 0, pin: '4627', isfemale: false },
  { firstname: 'Eun-Jung', lastname: 'Barnaby', phonenumber: '808-473-0989', allowtexts: true, detaineefirstname: 'Abram', detaineelastname: 'Herbert', detaineestateid: '8790-1529', state: 'unauthorized', dateofbirth: '10/1/1944', userid: 0, pin: '4570', isfemale: false },
  { firstname: 'Ivor', lastname: 'Shun', phonenumber: '808-380-2176', allowtexts: true, detaineefirstname: 'Dalton', detaineelastname: 'Xia', detaineestateid: '3253-5758', state: 'authorized', dateofbirth: '6/2/1916', userid: 0, pin: '2537', isfemale: false },
  { firstname: 'Jiang', lastname: 'Arden', phonenumber: '808-330-7492', allowtexts: true, detaineefirstname: 'Tu', detaineelastname: 'Robin', detaineestateid: '0110-8799', state: 'authorized', dateofbirth: '2/16/1925', userid: 0, pin: '7050', isfemale: false },
  { firstname: 'Yuuki', lastname: 'Mattie', phonenumber: '808-368-3565', allowtexts: true, detaineefirstname: 'Brook', detaineelastname: 'Daly', detaineestateid: '4105-6197', state: 'authorized', dateofbirth: '5/2/1947', userid: 0, pin: '8224', isfemale: false },
  { firstname: 'Daley', lastname: 'Chin', phonenumber: '808-251-2621', allowtexts: true, detaineefirstname: 'Woo-Jin', detaineelastname: 'Lynwood', detaineestateid: '5171-2440', state: 'authorized', dateofbirth: '2/23/1920', userid: 0, pin: '9018', isfemale: false },
  { firstname: 'Thomas', lastname: 'Lanny', phonenumber: '808-240-1597', allowtexts: true, detaineefirstname: 'Mick', detaineelastname: 'Troy', detaineestateid: '8209-2633', state: 'unauthorized', dateofbirth: '8/20/1920', userid: 0, pin: '6529', isfemale: false },
  { firstname: 'Parker', lastname: 'Guanting', phonenumber: '808-534-5786', allowtexts: true, detaineefirstname: 'Trevor', detaineelastname: 'Hildred', detaineestateid: '0587-8435', state: 'unauthorized', dateofbirth: '4/25/1995', userid: 0, pin: '5952', isfemale: false },
  { firstname: 'Elwin', lastname: 'Moana', phonenumber: '808-164-1024', allowtexts: true, detaineefirstname: 'Alvin', detaineelastname: 'Brook', detaineestateid: '8263-4236', state: 'authorized', dateofbirth: '4/13/1902', userid: 0, pin: '3797', isfemale: false },
  { firstname: 'Cayden', lastname: 'Granville', phonenumber: '808-498-8803', allowtexts: true, detaineefirstname: 'Takara', detaineelastname: 'Sung', detaineestateid: '8733-1618', state: 'authorized', dateofbirth: '7/5/1995', userid: 0, pin: '6039', isfemale: false },
  { firstname: 'Beauregard', lastname: 'Windsor', phonenumber: '808-477-0337', allowtexts: true, detaineefirstname: 'Maverick', detaineelastname: 'Montana', detaineestateid: '7325-8059', state: 'unauthorized', dateofbirth: '7/28/1977', userid: 0, pin: '4502', isfemale: false },
  { firstname: 'Yuuma', lastname: 'David', phonenumber: '808-283-9405', allowtexts: true, detaineefirstname: 'Jem', detaineelastname: 'Yong', detaineestateid: '8831-8846', state: 'unauthorized', dateofbirth: '9/8/1972', userid: 0, pin: '0115', isfemale: false },
  { firstname: 'Laird', lastname: 'Fredric', phonenumber: '808-307-1682', allowtexts: true, detaineefirstname: 'Abraham', detaineelastname: 'Carver', detaineestateid: '9613-7044', state: 'authorized', dateofbirth: '6/19/1919', userid: 0, pin: '2788', isfemale: false },
  { firstname: 'Korbin', lastname: 'Aloysius', phonenumber: '808-311-7614', allowtexts: true, detaineefirstname: 'Rastus', detaineelastname: 'Gordy', detaineestateid: '3171-2545', state: 'unauthorized', dateofbirth: '11/15/1975', userid: 0, pin: '9220', isfemale: false },
  { firstname: 'Bishop', lastname: 'Ford', phonenumber: '808-470-1297', allowtexts: true, detaineefirstname: 'River', detaineelastname: 'Gideon', detaineestateid: '2479-4235', state: 'unauthorized', dateofbirth: '11/21/1998', userid: 0, pin: '4859', isfemale: false },
  { firstname: 'Sacheverell', lastname: 'Grey', phonenumber: '808-593-9849', allowtexts: true, detaineefirstname: 'Izzy', detaineelastname: 'Kamalani', detaineestateid: '7117-3862', state: 'authorized', dateofbirth: '3/25/1915', userid: 0, pin: '6872', isfemale: false },
  { firstname: 'Shichirou', lastname: 'Gorou', phonenumber: '808-162-0920', allowtexts: true, detaineefirstname: 'Thomas', detaineelastname: 'Zhihao', detaineestateid: '6715-4421', state: 'authorized', dateofbirth: '6/13/1939', userid: 0, pin: '3604', isfemale: false },
  { firstname: 'Galen', lastname: 'Kichiro', phonenumber: '808-387-6663', allowtexts: true, detaineefirstname: 'Brenton', detaineelastname: 'Emory', detaineestateid: '5041-3856', state: 'unauthorized', dateofbirth: '6/25/1968', userid: 0, pin: '1111', isfemale: false },
  { firstname: 'Caiden', lastname: 'Ronny', phonenumber: '808-220-3410', allowtexts: true, detaineefirstname: 'Jayden', detaineelastname: 'Jude', detaineestateid: '2716-6405', state: 'unauthorized', dateofbirth: '9/1/1962', userid: 0, pin: '5691', isfemale: false }];




/* When running for the first time, set up the roles. */
if (Roles.getAllRoles().length === 0) {
  // console.log('Defining Roles');
  Roles.createRole('admin');
  Roles.createRole('visitor');
}

if (Meteor.users.find().count() === 0) {
  visitors.forEach((v) => {
    const id = Visitors.insert(v);
    let userid = 0;
    Meteor.call('create.visitor', { username: v.phonenumber, password: v.pin }, (err, res) => {
      if (err) {
        // need to do something better than alert.
        console.log(err);
      } else {
        console.log(`Created sample visitor ${v.firstname} ${v.lastname}`);
        userid = res;
        Visitors.update({ _id: id }, { $set: { userid } });
      }
    });
  });
}
/* When running app for first time, pass a settings file to set up a default user account. */
if (!!Meteor.settings.defaultAdminAccount) {
  if (Meteor.users.find({ username: Meteor.settings.defaultAdminAccount.username }).count() === 0) {
    const id = Accounts.createUser({
      username: Meteor.settings.defaultAdminAccount.username,
      password: Meteor.settings.defaultAdminAccount.password,
    });
    Roles.addUsersToRoles(id, ['admin']);
    console.log('Created admin user.');
  } else {
    console.log('No admin user!  Please invoke meteor with a settings file.');
  }
}



# Salesforce DX Project: Next Steps

Now that you’ve created a Salesforce DX project, what’s next? Here are some documentation resources to get you started.

## How Do You Plan to Deploy Your Changes?

Do you want to deploy a set of changes, or create a self-contained application? Choose a [development model](https://developer.salesforce.com/tools/vscode/en/user-guide/development-models).

## Configure Your Salesforce DX Project

The `sfdx-project.json` file contains useful configuration information for your project. See [Salesforce DX Project Configuration](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_config.htm) in the _Salesforce DX Developer Guide_ for details about this file.

## Read All About It

- [Salesforce Extensions Documentation](https://developer.salesforce.com/tools/vscode/)
- [Salesforce CLI Setup Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm)
- [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm)
- [Salesforce CLI Command Reference](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference.htm)

calculation: calculator.html file
two way binding
private properties : bmiCalculator.html
getter properties : bmiCalculator.html
public properties: meetingRoom.html
public boolean properties: meetingRooms.html
local developement server
Forms
pagenavigation: navigation.html
Third party Library
Test case for meetingrooms
debug salesforce git link: https://github.com/salesforce/sfdx-lwc-jest

<!-- Apex Fundamentals -->

String greeting = 'Hello World';

System.debug(greeting);

String str = 'i am a string variable';
System.debug('Actual String: '+str);

// capitalize string
System.debug('Capitalize String: '+str.capitalize());

// contains example
//

System.debug(''+str.contains('ring'));

System.debug(''+str.toUpperCase());

System.debug(''+str.toLowerCase());

System.debug(''+str.equals('ring'));

System.debug(''+str.equals('string'));

System.debug('welcom\'scacdac');

List<Integer> rollNumbers = new List<Integer>{11,12,13};
System.debug(rollNumbers);

// Map Datatype

Map<Integer, String> class2020 = new Map<Integer, String>();

// add a new student /item

class2020.put(1100, 'Rayudu');
class2020.put(1101, 'test1');
class2020.put(1102, 'test2');
class2020.put(1103, 'test3');
System.debug(class2020);

class2020.put(1104, 'test4');
System.debug(class2020);
class2020.put(1104, 'test5');
System.debug(class2020);

//get a value

System.debug(class2020.get(1104));

// remove an item from map

class2020.remove(1104);
System.debug(class2020);

// get all the keys
Set<Integer> rollNumber = class2020.keySet();
System.debug(rollNumber);

// get all the values
List<String> students = class2020.values();
System.debug(students);

// check ig map has the key
System.debug(class2020.containsKey(1102));
System.debug(class2020.containsKey(1104));

 <!-- the list and map -->

List<String> apexPost = new List<String>{'Apex string 1', 'Apex String2'};

List<String> lightningPost = new List<String>{'Lightning string 3', 'Lightning String4'};

Map<String, List<String>> allposts = new Map<String, List<String>>();

allposts.put('Apex', apexPost);
allposts.put('Lightning', lightningPost);

System.debug(allposts);

//Const in apex, here Final is the const

Final Decimal pi;
System.debug(pi);

// update the variable value
pi = 2.12312;
System.debug(pi);

Final Decimal pii = 3.112312;
System.debug(pii);

Date time
DateTime curentDateTime = DateTime.newInstance(2020,5,18,10,25,0);
System.debug(curentDateTime);
// output: 2020-05-18 17:25:00

// assignment operator
Integer x=5;
System.debug('assignment operator -'+x);

//addition operator
x= x+5;
System.debug('addition operator -'+x);

//substration operator
x= x-5;
System.debug('substration operator -'+x);

//multiply operator
x= x\*5;
System.debug('multiply operator -'+x);

//division operator
x= x/5;
System.debug('division operator -'+x);

//x=x+1;
//increment operator
x++;
System.debug('increment operator -'+x);

//x=x-1;
//decrement operator
x--;
System.debug('decrement operator -'+x);

//addition assignment operator
//x=x+5; addition operator
x+=5; //x=x+5;
System.debug('addition assignment operator -'+x);

//substrction assignment operator
x-=5; //x=x-5;
System.debug('substrction assignment operator -'+x);

//multiply assignment operator
x*=5; //x=x*5;
System.debug('multiply assignment operator -'+x);

//division assignment operator
x/=5; //x=x/5;
System.debug('division assignment operator -'+x);

//using addition operator on strings
String hello = 'Hello';
String world = 'World';

String helloWorld = hello+world;

System.debug(hello+world);
System.debug(hello+ ' ' +world);

Boolean first = true;
Boolean second = false;
Boolean result;

//And Operator

result = first && second;
System.debug('And operator - '+result);

//OR operator
result = first || second;
System.debug('OR operator - '+result);

//Equality operator
result = (first == second);
System.debug('Equality operator Boolean- '+result);
result = (5==5);
System.debug('Equality operator Integer- '+result);
result = ('Hello' == 'World');
System.debug('Equality operator String- '+result);

//Less than operator
result = (5<6);
System.debug('Less than operator- '+result);

//Greater than operator
result = (5>6);
System.debug('Greater than operator- '+result);

//Less than or equal to operator
result = (5<=6);
System.debug('Less than or equal to operator- '+result);

//Greater than or equal to operator
result = (5>=6);
System.debug('Greater than or equal to operator- '+result);

//Not operator
first = !first; //False
System.debug('Not operator- '+first);

//Ternary operator
Boolean isLeapYear = true;
String msg = isLeapYear ? 'It is a leap year.' : 'It is not a leap year.';
System.debug('Message - ' + msg);

<!-- Excercise -->

Final Integer one_Slice = 8;
Final Integer two_three = 7;
Final Integer morethan_three = 6;

Integer Ross =3; //-21
Integer chandler =1; //;-8
Integer Joey =4; //-24

Integer RossPayment = Ross == 1 ? one_Slice*Ross : (Ross<=3 ? two_three*Ross : morethan_three\*Ross);
System.debug('Ross price - ' + RossPayment);

Integer chandlerPayment = chandler == 1 ? one_Slice*chandler : (chandler<=3 ? two_three*chandler : morethan_three\*chandler);
System.debug('chandler price - ' + chandlerPayment);

Integer JoeyPayment = Joey == 1 ? one_Slice*Joey : (Joey<=3 ? two_three*Joey : morethan_three\*Joey);
System.debug('Joey price - ' + JoeyPayment);

<!-- Switch case -->

Integer Hour = 12;

switch on Hour {
when 1,2,3,4,5,6,7,8,9,10,11 {
System.debug('Good Morning');
}
when 12,13,14,15,16,17,18 {
System.debug('Good Afternoon');
}
when else{
System.debug('Good Night');
}
}

<!-- leaf year condition -->

Integer leafYear = 2000;

if (Math.mod(leafYear, 4) == 0){
if (Math.mod(leafYear, 100) == 0){
if (Math.mod(leafYear, 400) == 0){
System.debug( leafYear +' is a leaf year');
}
else {
System.debug(leafYear + ' is not a leaf year');  
 }
}  
 else {
System.debug( leafYear + ' is a leaf year' );
}
} else {
System.debug( leafYear + ' is not a leaf year' );
}

The Story of If-Else vs Switch-When
It is possible to use if-else statements instead of switch-when, but sometimes, using switch-when can drastically improve the readability of your code. Let's compare the last two code examples with the help of switch-when and if-else statements.

/\*\*

- Example 1

- Check what day is today.

- If it is a weekday, then print "Go to work."

- If it is Saturday, then print "Go to the party."

- Else print "Watch movies."

\*/

Implemented with if-else

// Using if-else statements
String today = 'Monday';
if(today == 'Monday' || today == 'Tuesday' || today == 'Wednesday' || today == 'Thursday' || today == 'Friday'){
System.debug('Go to work');
} else if (today == 'Saturday'){
System.debug('Go to party');
} else {
System.debug('Watch movies');
}

Implemented with switch-when

// Using switch-when statements
String today = 'Monday';
switch on today {
when 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' {
System.debug('Go to work');
}
when 'Saturday' {
System.debug('Go to party');
}
when else {
System.debug('Watch movies');
}
}

Clearly, switch-when gives better readability in this example, and you can get rid of all OR (||) operators as well.

/\*\*

- Example 2

- Check the value of the current hour of the day.

- If it is less than 12 or between 1 to 11, then print "Good morning."

- If it is greater than or equals to 12 but less than 17, the print "Good afternoon."

- Else print "Good evening."

\*/

Implemented with if-else

// Using if-else statements
Integer currentHour = 12;
if(currentHour < 12){
System.debug('Good Morning');
} else if (currentHour >= 12 && currentHour<17){
System.debug('Good Afternoon');
} else{
System.debug('Good Evening');
}

Implemented with switch-when

// Using switch-when statements
Integer currentHour = 12;
switch on currentHour {
when 0,1,2,3,4,5,6,7,8,9,10,11{
System.debug('Good Morning');
}
when 12,13,14,15,16{
System.debug('Good Afternoon');
}
when else {
System.debug('Good Evening');
}
}

In this example, I prefer if-else statement over switch-when, as the list of values we need to match is quite big, and a less than operator (<) can simplify the code readability.




<!-- do-while -->

Integer fizzBuss = 0;

do{
    if ((Math.mod(fizzBuss, 5) == 0) && (Math.mod(fizzBuss, 3) == 0)){
        System.debug( ' fizzbuzz' );
    } else   if (Math.mod(fizzBuss, 3) == 0){
        System.debug( ' Fizz' ); 
    } else if(Math.mod(fizzBuss, 5) == 0){
         System.debug( ' Buzz' );
    } else{
       System.debug( fizzBuss  ); 
    }
    
  fizzBuss++;  
} while(fizzBuss <= 100);{
    
}


<!-- For loop -->

Integer n=5;
    for(Integer row=0; row<=n; row++){
       String pattern = '';
            for(Integer column=0; column<=row; column++){
                 pattern = pattern + '* ' ;
            }
        System.debug(pattern);
    }


<!-- Break -->
Integer gooseBumpsAfter = 4;
Integer n =1000;

for(Integer i=0; i<n;i++){
    System.debug('Listening to song ' + i + ' times ');    
    if(i == gooseBumpsAfter){
        break;
    }
    }

<!-- Continue -->
List<String> days = new List<String>{'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'};

for(Integer i=0; i < days.size();i++){
    if(days.get(i) == 'Tuesday'){
        continue;
    }
    System.debug('It is ' + days.get(i)+'Eat EGG');
}


List<Integer> rollNumbers = new List<Integer>{1101,1234,1111,1542};
    
    for(Integer rollNumber : rollNumbers){
        System.debug('Student RN: ' + rollNumber);
    }

<!-- Method Syntax -->
public - Access modifier (Optional)
static - Special keyword (Optional)
Integer - Return Type (Required)
add - Method name (Required)
Integer num1, Integer num2 - parameters (optional)
   <!--Method body open -->
   Integer sum = num1 + num2;
   return sum;
   <!-- Method body close -->

   Must for all return types except void
   
    public static Integer add(Integer num1, Integer num2){

        Integer sum = num1 + num2;
        return sum;
    }

<!-- Life cycle -->
1. Static Initilization Block
2. Initilization Block
3. Blank Constructor
4. Parameterized Constructor


<!-- Relationship Queries -->

// Contact is a parent object of case
// Account is a parent object of Contact


// Retrieve Name, Department and Title of all contacts
SELECT Name, Department, Title FROM Contact

// Retrieve all Cases (CaseNumber, Subject) raised by the contact
SELECT Name, Department, Title, (Select CaseNumber, Subject FROM Cases) FROM Contact

// Get parent Account's Name, Rating for each Contact
SELECT Name, Department, Title, (Select CaseNumber, Subject FROM Cases), Account.Name, Account.Rating FROM Contact

// Make sure Account fields are the initial columns in results
SELECT Account.Name, Account.Rating, Name, Department, Title, (Select CaseNumber, Subject FROM Cases) FROM Contact

// Retrieve only those records where Account Rating is Hot
SELECT Account.Name, Account.Rating, Name, Department, Title, (Select CaseNumber, Subject FROM Cases) FROM Contact WHERE Account.Rating='Hot'

// Sort results by Contact Name
SELECT Account.Name, Account.Rating, Name, Department, Title, (Select CaseNumber, Subject FROM Cases) FROM Contact WHERE Account.Rating='Hot' ORDER BY Name

// Only retrieve open cases (use IsClosed Checkbox field value)
SELECT Account.Name, Account.Rating, Name, Department, Title, (Select CaseNumber, Subject FROM Cases WHERE IsClosed=false) FROM Contact WHERE Account.Rating='Hot' ORDER BY Name

// Add one more filter condition, Contact Department must be equals to 'Technology'
SELECT Account.Name, Account.Rating, Name, Department, Title, (Select CaseNumber, Subject FROM Cases WHERE IsClosed=false) FROM Contact WHERE Account.Rating='Hot' AND Department='Technology' ORDER BY Name


<!-- SOQL in APEX -->
List<Account> accounts = [SELECT Name, Phone FROM Account];

for(Account account:accounts){
    System.debug('Account Name: ' +account.Name + 'Account Phone: '+account.phone);
}

<!-- Using Map in APEX -->
Map<Id,Account> accountsMap = new Map<Id, Account>( [SELECT Name, Phone FROM Account]);

for(Account account:accountsMap.values()){
    System.debug('Account Name: ' +account.Name + 'Account Phone: '+account.phone);
}

<!-- Using Custom object -->
List<Invoice__c> invoices = [SELECT Name FROM Invoice__c];

for(Invoice__c invoice:invoices){
    System.debug('Invoice Name: ' +invoice.Name);
}

<!-- SOQL Relationships in APEX -->
<!-- use list of 'Contact' to store the query result
you cannot use list of 'Case', or list of 'Account' as
our main object is 'Contact' -->
List<Contact> contacts = [SELECT Account.Name, Account.Rating, Name, Department, Title, (Select CaseNumber, Subject FROM Cases) FROM Contact ORDER BY Name];

for(Contact con : contacts){
    System.debug('Contact Name: '+con.Name+', Contact Department: '+con.Department+', Contact Title: '+con.Title+', Account Name: '+con.Account.Name+', Account Rating: '+con.Account.Rating);
    // iterate over the child records (Cases)
    for(Case caseObj : con.Cases){
        System.debug('Case Number: '+caseObj.CaseNumber+', Case Subject:'+caseObj.Subject);
    }
}

<!-- SOQL Bind Variables -->
List<String> accountNames = new List<String>();
accountNames.add('Sample SObject Account');
accountNames.add('New Line Cinema');
accountNames.add('SFDCFacts');
accountNames.add('Burlington Textiles Corp of America');

List<Account> accounts = [SELECT Id, Name, Phone, Rating FROM Account
                         	WHERE Name IN :accountNames];
System.debug('Accounts: '+accounts);
System.debug('Accounts Size: '+accounts.size());

<!-- SOQL Dynamic Queries -->

String accountClass = 'Class3';

String queryString = 'SELECT Id, Name, Phone, Rating FROM Account';

if(accountClass == 'Class1'){
    queryString += ' WHERE Rating=\'Hot\' AND Type=\'Prospect\'';
} else if(accountClass == 'Class2'){
    queryString += ' WHERE Rating=\'Warm\' AND Type=\'Other\'';
} else {
    queryString += ' WHERE Rating=\'Hot\'';
}

List<Account> accounts = Database.query(queryString);
System.debug('Accounts '+accounts);
System.debug('Accounts size '+accounts.size());

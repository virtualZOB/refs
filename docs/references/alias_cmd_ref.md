# Alias Command Reference  
The following describes Alias commands avialable to vZOB controllers.

You may practice the use of these commands [HERE](https://refs.clevelandcenter.org/references/alias-practice/).


The CRC software has native (built-in) alias commands that will not be covered in this document, but you may learn about the native commands via the CRC Manual found [HERE](https://crc.virtualnas.net/docs/#/). Commands contained in this document are vZOB custom commands. 


Alias commands were originally used mainly for text-to-pilot communications. Today, they support more powerful functions, such as the In-Scope Reference (ISR) system. And as more pilots use voice capabilities, the alias command system should be viewed as a tool rather than a primary communication method. To avoid confusion between tools and communications, any command intended to send information to a pilot will be prefixed with “T” (for “text”) immediately after the initial period. (ex: .Tcommand)
See the "Text to Pilots" section for more context.


## COLUMNS EXPLANATION

- SYNTAX
    - Meaning: "How the command is formatted"
    - Unless otherwise indicated, Airport ID’s (APT ID) are the FAA code, not the ICAO.
    - {== FAC ID ==} = Facility ID code. Ex: "D21" = Detroit Metro TRACON facility.
    - {== POS ID ==} = Position ID code. Ex: "D1F" = Detroit Metro TRACON Northeast Feeder Sector. AKA "The handoff code".
    - Text that is {== HIGHLIGHTED ==} conveys the info that is required to be typed in that place.
    - Text that is <ins>UNDERLINED</ins> indicates optional information.
    - ``(space)`` indicates when to hit the space-bar.
    - Unless otherwise indicated, the user completes a command by pressing the keyboard "ENTER" button. If "ASEL" appears after a command, the user must complete it by first selecting the aircraft in the Text-Communication Window, then typing the alias command, and finally pressing their designated Aircraft Select (ASEL) key (defined in CRC settings menu).
- DESCRIPTION
    - Describes what happens when the command is completed or will provide an example of what is displayed.
    - If a note with a number is referenced in this box, refer to the NOTES section of this reference document for further information concerning how to effectively utilize this command.
- EXAMPLE
    - Displays one or more examples of the command.
- NOTES
    - TTP = indicates that a command has a "Text-To-Pilot" equivalent. For example, if the command is “.test” and "TTP" appears in the Notes column, the user can typically add “T” immediately after the initial period to send it as text-to-pilot: “.Ttest”. Consult the Text-To-Pilots section.

## ZOB WEBSITE REFERENCE

|   SYNTAX   |   DESCRIPTION   |   EXAMPLE   |   NOTES   |
| --- | --- | --- | --- |
|   .COMMANDS   |   Opens this Command Reference Page.   |   .COMMANDS   |      |
|   .FEEDBACK   |   Opens the ZOB “Feedback from Controllers "page to allow you to quickly report issues, requests, etc …   |   .FEEDBACK   |      |
|   .IDS   |   Opens the ZOB IDS page.   |   .IDS   |      |

## EXTERNAL SITE COMMANDS
|   SYNTAX   |   DESCRIPTION   |   EXAMPLE   |   NOTES   |
| --- | --- | --- | --- |
|   .ICAO   |   Opens users webbrowser to the ICAO site to search aircraft codes.   |   .ICAO   |      |
|   .SEE <br> AC    |   Opens users webbrowser to google images to show the selected aircrafts picture.   |   .SEEAC   |      |
|   .N# <br> FORMAT   |   Opens users webbrowser to the FAA N-Number format page.   |   .N#FORMAT   |   TTP   |
|   .ID <br> FORMAT   |   Opens users webbrowser to the FAA Air-Carrier telephony page.   |   .IDFORMAT   |   TTP   |
|   .ROF   |   Opens users webbrowser to skyvector and displays the assigned routing of the selected aircraft. Reference NOTE [^1].   |   .ROF   |      |
|   .ROF <br> FA   |   Opens users webbrowser to FlightAware and displays the routes flown between the selected aircrafts departure and arrival airport.   |   .ROFFA   |      |
|   .SKY   |   Opens users webbrowser to Skyvector.   |   .SKY   |      |
|   .EQUIP   |   Opens users webbrowser to FlightAware FAA equipment suffix code page.   |   .EQUIP   |   TTP   |
|   .ICAO <br> EQUIP   |   Opens users webbrowser to ForeFlight equipment suffix code page.   |   .ICAOEQUIP   |      |
|   .POINT <br> 65   |   Opens users webbrowser to FAA 7110.65 HTML page.   |   .POINT65   |      |
|   .CHARTS <br> ``(space)`` <br> ({== FAA or ICAO APT ID ==})   |   Opens users webbrowser to AIRNAV IFR section for the given airport ID.   |   .CHARTS {== DTW ==}   |      |
|   .CHARTS <br> CF <br> ``(space)`` <br> ({== ICAO APT ID ==})   |   Opens users webbrowser to ChartFox for the given airport ID.   |   .CHARTSCF {== KDTW ==}   |      |
|   .CHARTS <br> FAA   |   Opens users webbrowser to FAA Terminal Procedures and Airport Diagrams page.   |   .CHARTSFAA   |      |
|   .TMU <br> MAP   |   Opens users webbrowser to VATUSA TMU page for ZOB.   |   .TMUMAP   |      |
|   .HOLDING <br> SHEET   |   Opens a hold tracking spreadsheet that allows the facility to coordinate simultaneous holding.   |   .HOLDINGSHEET   |      |

## GENERAL ASSISTANCE

### General
|   SYNTAX   |   DESCRIPTION   |   EXAMPLE   |   NOTES   |
| --- | --- | --- | --- |
|   .RFD   |   ISR of script to read to the pilot with the format for a Release-For-Departure clearance that includes a 10min void time from the current time and an advisory to contact the issuing controller no later than 15min of intentions if not off in time.   |   .RFD   |   TTP   |
|   .NO <br> TWR <br> APP   |   ISR of specific phraseology and rules associated with IFR arrivals into a non-towered field.   |   .NOTWRAPP   |      |
|   .HOLDING   |   ISR of script to read to the pilot with the format of a Holding clearance.   |   .HOLDING   |      |
|   .TAA   |   ISR of specific phraseology and rules associated with utilizing the TAA on RNAV approaches.   |   .TAA   |      |
|   .HELI <br> CT   |   ISR of specific phraseology and rules associated with helicopter takeoffs.   |   .HELICT   |      |
|   .HELI <br> CL   |   ISR of specific phraseology and rules associated with helicopter landings.   |   .HELICL   |      |

### Special Operations
|   SYNTAX   |   DESCRIPTION   |   EXAMPLE   |   NOTES   |
| --- | --- | --- | --- |
|   .FUEL <br> DUMP   |   ISR of specific phraseology and rules associated with fuel dumping operations.   |   .FUELDUMP   |      |
|   .OTP   |   ISR of specific phraseology and rules associated with a VFR-ON-TOP clearance.   |   .TOP   |      |
|   .CRUISE   |   ISR of specific phraseology and rules associated with a Cruise clearance.   |   .CRUISE   |      |

### Military Operations
|   SYNTAX   |   DESCRIPTION   |   EXAMPLE   |   NOTES   |
| --- | --- | --- | --- |
|   .MIL <br> REFUEL <br> START   |   ISR of specific phraseology and rules associated with the start of Ariel Refueling operations.   |   .MILREFUELSTART   |      |
|   .MIL <br> REFUEL <br> END   |   ISR of specific phraseology and rules associated with the end of Ariel Refueling operations.   |   .MILREFUELEND   |      |
|   .MIL <br> MARSA   |   ISR of specific phraseology and rules associated with Military Assumes Resonsibility for Separation of Aircraft (MARSA) operations.   |   .MILMARSA   |      |
|   .MIL <br> OVERHEAD   |   ISR of specific phraseology and rules associated with an Overhead Break maneuver.   |   .OVERHEAD   |      |
|   .MIL <br> MOA   |   ISR of specific phraseology and rules associated with a Military Operations Area (MOA).   |   .MILMOA   |      |
|   .MIL <br> MTR   |   ISR of specific phraseology and rules associated with a Military Training Route (MTR).   |   .MILMTR   |      |
|   .MIL <br> CT   |   ISR of specific phraseology and rules associated with a military takeoff clearances.   |   .MILCT   |   No need for TTP because the standard .TCT is formatted this way.   |
|   .MIL <br> CL   |   ISR of specific phraseology and rules associated with a military landing clearances.   |   .MILCL   |   No need for TTP because the standard .TCL is formatted this way.   |

### Help A Pilot In Need
|   SYNTAX   |   DESCRIPTION   |   EXAMPLE   |   NOTES   |
| --- | --- | --- | --- |
|   .BAD <br> PILOT   |   ISR of a script to read to the pilot who is clearly not equipped with the knowledge or skill to complete the flight they are trying to conduct. This script is for a pilot that you are considering calling a supervisor for.   |   .BADPILOT   |   TTP   |
|   .SWITCH <br> TO <br> TWR   |   ISR of a script to read to the who has reached the assigned departure runway and is inquiring why they didn ’t get a switch to tower instruction.   |   .SWITCHTOTWR   |   TTP   |

### Tools
|   SYNTAX   |   DESCRIPTION   |   EXAMPLE   |   NOTES   |
| --- | --- | --- | --- |
|   .EQUIP <br> ({== FAA EQUIPMENT SUFFIX LETTER ==})   |   Responds with a description of what capabilities the given equipment suffix indicates.   | .EQUIP{==L==}   |      |
|   .POS <br> CHECK   |   ISR of a item list for a position relief checklist.   |   .POSCHECK   |      |
|   .L   |   Shows which callsigns are currently transmitting or were recently transmitting on voice   |   .L   |      | 
|   .CWT <br> ({== 1st CWT Letter ==}) <br> ({== 2nd CWT Letter ==})   |   Returns Consolidated Wake Turbulence (CWT) separation standards for the given sequence per FAA Order JO 7110.126   |   .CWT{==AC==}   |   In the given example, a "C" aircraft follows an "A" aircraft.   |
|   .AC <br> INFO <br> ({== ACFT ICAO CODE ==})   |   Returns details about the given aircraft type.   |   .ACINFO{==B738==}  |   This is different than the .ACINFO command native to CRC.   |

## GROUND TO GROUND COMMUNICATION
|   SYNTAX   |   DESCRIPTION   |   EXAMPLE   |   NOTES   |
| --- | --- | --- | --- |
|   .M <br> ``(space)`` <br> ({== POS ID ==}) <br> ``(space)`` <br> (<ins>FREE TEXT</ins>)  |   With the subject aircraft selected, sends a Generic private message to the given ATC while automatically inserting the subject aircraft’s callsign.   |   .M {==D1F==} <ins>has declared MinFuel</ins> |      |
|   .RC <br> ``(space)`` <br> ({== POS ID ==}) <br> ``(space)`` <br> (<ins>FREE TEXT</ins>)  |   With the subject aircraft selected, sends a Rolling Call Notification private message to the given ATC while automatically inserting the subject aircraft’s callsign.   |   .RC {==D1E==}  <ins>RWY 21</ins>   |      |
|   .RT <br> ``(space)`` <br> ({== POS ID ==})   |   With the subject aircraft selected, sends a Rejected Takeoff Notification private message to the given ATC while automatically inserting the subject aircraft’s callsign.   |   .RT {== D1E ==}   |      |
|   .MA <br> ``(space)`` <br> ({== POS ID ==}) <br> ``(space)`` <br> (<ins>FREE TEXT</ins>)  |   With the subject aircraft selected, sends a Missed Approach Notification private message to the given ATC while automatically inserting the subject aircraft’s callsign.   |   .MA {==D1E==}  <ins>Published</ins>   |      |
|   .DT <br> ``(space)`` <br> ({== POS ID ==})   |   With the subject aircraft selected, sends a Down-Time Notification private message to the given ATC while automatically inserting the subject aircraft’s callsign and current time.   |   .DT {== D1F ==}   |      |
|   .RR <br> ``(space)`` <br> ({== ATPOS ID ==}) <br> ``(space)`` <br> (<ins>FREE TEXT up to 8 elements</ins>)  |   With the subject aircraft selected, sends a Release Request private message to the given ATC while automatically inserting the subject aircraft’s callsign, Departure and Arrival airports, and route of flight.   |   .RR {==D1E==} <ins>H120 8K S280</ins>   |      |
|   .RA <br> ``(space)`` <br> ({== POS ID ==}) <br> ``(space)`` <br> (<ins># of min from now</ins>)  |   With the subject aircraft selected, sends a Release Approved private message to the given ATC while automatically inserting the subject aircraft’s callsign and the number of minuets from now that the aircraft is approved for release.   |   .RA {== D2P ==}  <ins>3</ins>   |   If the ACFT is released at this current time, do not specify a number of min from now.   |
|   .PO <br> ``(space)`` <br> ({== POS ID ==}) <br> ``(space)`` <br> ({== POINT ==}) <br> ``(space)`` <br> (<ins>FREE TEXT</ins>)  |   With the subject aircraft selected, sends a Point-Out request private message to the given ATC while automatically inserting the subject aircraft’s position relative to the given point, callsign and assigned altitude.   |   .PO {== D1F ==} {== WNGNT ==} <ins>to the boundary and then turning northeast bound</ins>    |      |
|   .HO <br> ``(space)`` <br> ({== POS ID ==}) <br> ``(space)`` <br> ({== POINT ==}) <br> ``(space)`` <br> (<ins>FREE TEXT</ins>)  |   With the subject aircraft selected, sends a Handoff Notification private message to the given ATC while automatically inserting the subject aircraft’s position relative to the given point, assigned beacon code, callsign and assigned altitude.   |   .HO {== D1F ==} {== WNGNT ==} <ins>Requesting FL230</ins>   |      |
|   .APREQ <br> ``(space)`` <br> ({== POS ID ==}) <br> ``(space)`` <br> (<ins>FREE TEXT</ins>)  |   With the subject aircraft selected, sends a Approval Request (APREQ) private message to the given ATC while automatically inserting the subject aircraft’s callsign.   |   .M {== 77 ==} <ins>Direct STENT</ins>   |      |

## AUTO-TRACK CONFIGURATIONS
|   SYNTAX   |   DESCRIPTION   |   EXAMPLE   |   NOTES   |
| --- | --- | --- | --- |
|   .AT <br> ({==FAC ID ==}) <br> <ins>OFF</ins> |   Turns on/off auto-track for all underlying towered fields for the given facility.   |   .AT{==D21==} <br> .AT{==D21==}<ins>OFF</ins>   |      |
|   .AT <br> ZOB <br> <ins>OFF</ins>  |   Turns on/off auto-track at all towered fields under ZOB which are open during the day/mid.   |   .ATZOB <br> .ATZOB<ins>OFF</ins>   |      |

## OTHER TOOLS

|   SYNTAX   |   DESCRIPTION   |   EXAMPLE   |   NOTES   |
| --- | --- | --- | --- |
|   .RLS <br> FP   |   With the subject aircraft selected, sends a message to the VATSIM FSD releasing control of the flight plan, allowing the pilot to edit elements in it and resend it.   |   .RLSFP   |   This is not a ZOB specific command but is not a well-documented command in external reference materials.   |

## TEXT TO PILOTS (TTP)
### General
|   SYNTAX   |   DESCRIPTION   |   EXAMPLE   |   NOTES   |
| --- | --- | --- | --- |
|   .T <br> CME   |   Sends a contact-me message to the selected aircraft.   |   .TCME   |      |
|   .T <br> SQ   |   Squawk the assigned squawk code.   |   .TSQ   |      |
|   .T <br> CON <br> ``(space)`` <br> ({==POS ID ==})      |   Contact the given ATC position.   |   .TCON {==D1F==}   |      |
|   .T <br> MON <br> ``(space)`` <br> ({==POS ID ==})   |   Monitor the given ATC position.   |   .TMON {==D1F==}   |      |
|   .T <br> CLOSING <br> ``(space)`` <br> ({==# of min ==})   |   Announces that you will be closing in the given number of min.   |   .TCLOSING  {==10==}   |   Ensure you do not have an aircraft selected prior to sending this command.   |
|   .T <br> CLOSED   |   Announces that you are now closed.   |   .TCLOSED   |      |
|   .T <br> SWITCH <br> TO <br> TWR   |   Private messages the selected aircraft informing them that they do not need an instruction to contact Tower when approaching the assigned runway for departure. Also provides relevant AIM reference.   |   .TSWITCHTOTWR   |      |
|   .T <br> EQUIP   |   Private messages the selected aircraft asking for their FAA equipment suffix code and provides a link to a tutorial showing them how to determine their code.   |   .TEQUIP   |      |
|   .T <br> N# <br> FORMAT   |   Private messages the selected aircraft advising them that their N-number format seems to be incorrect and links them to the FAA site to help them correctly format their callsign in the future.   |   .TN#FORMAT   |      |
|   .T <br> ID <br> FORMAT   |   Private messages the selected aircraft advising them that their air-carrier callsign format seems to be incorrect and links them to the FAA site to help them correctly format their callsign in the future.   |   .TIDFORMAT   |      |
|   .T <br> BAD <br> PILOT   |   Private messages the selected aircraft/pilot who is clearly not equipped with the knowledge or skill to complete the flight they are trying to conduct. To be used for a pilot that you are considering calling a supervisor for.   |   .TVRT   |      |
|   .T <br> VRT   |   Private messages the selected aircraft asking the pilot to respond with their voice capabilities (V, R, or T) while encouraging the use of Full Voice (V).   |   .TVRT   |      |

### Clearance Delivery
|   SYNTAX   |   DESCRIPTION   |   EXAMPLE   |   NOTES   |
| --- | --- | --- | --- |
|   .T <br> RBC   |   Readback Correct   |   .TRBC   |      |
|   .T <br> CRAFT<br> AF <br> <ins>U</ins> <br> ``(space)`` <br> ({==INITIAL ALTITUDE ==}) <br> ``(space)`` <br> ({==DEP POS ID ==})   |   Issues a CRAFT clearance “as filed ".   |   .TCRAFTAF {== 17K D1E ==} <br> .TCRAFTAF<ins>U</ins> {== 17K D1E ==}   |   U = Departure offline/unicom   |
|   .T <br> CRAFT <br> FR <br> <ins>U</ins> <br> ``(space)`` <br> ({==INITIAL ALTITUDE ==}) <br> ``(space)`` <br> ({==DEP POS ID ==})   |   Issues a CRAFT clearance with a full route.   |   .TCRAFTFR {== 17K D1E ==} <br> .TCRAFTFR<ins>U</ins> {== 17K D1E ==}   |   U = Departure offline/unicom   |
|   .T <br> CRAFT <br> CVS <br><ins>U</ins> <br> ``(space)`` <br> ({==DP with ver # ==}) <br> ``(space)`` <br>   ({==DP END POINT ==}) <br> ``(space)`` <br> ({==DEP POS ID ==})   |   Issues a CRAFT clearance with a DP, DP endpoint, and issues Climb Via SID.   Reference note[^4]   |   .TCRAFTCVS {== HHOWE4 ==} {== LNCON ==} {== D1E ==} <br> .TCRAFTCVS<ins>U</ins> {== HHOWE4 ==} {== LNCON ==} {== D1E ==}   |   U = Departure offline/unicom.   |
|   .T <br> CRAFT <br> CVS <br> EM <br> <ins>U</ins> <br>``(space)`` <br> ({==DP with ver # ==}) <br>  ``(space)`` <br> ({==DP END POINT ==}) <br> ``(space)`` <br> ({==INITIAL ALTITUDE ==}) <br> ``(space)`` <br> ({==DEP POS ID ==})   |   Issues a CRAFT clearance with a DP, DP endpoint, and issues Climb Via SID, except  maintain .   Reference note[^4]   |   .TCRAFTCVSEM {==HHOWE4 ==} ({==LNCON ==} {==17K ==} {== D1E ==} <br> .TCRAFTCVSEM<ins>U</ins> {== HHOWE4 ==} {== LNCON ==} {== 17K ==} {== D1E ==}   |   U = Departure offline/unicom.   |

### Ground Control
|   SYNTAX   |   DESCRIPTION   |   EXAMPLE   |   NOTES   |
| --- | --- | --- | --- |
|   .T <br> RTV <br> ``(space)`` <br> ({==RWY ID ==}) <br> ``(space)`` <br> ({==TAXI INSTRUCTIONS ==})   |   Runway __, taxi via __   |   .TRTV {== 22L ==} {== V M, HOLD SHORT TAXIWAY M ==}   |      |
|   .T <br> TPV <br> ``(space)`` <br> ({==TAXI INSTRUCTIONS ==})   |   Taxi to parking via __   |   .TTPV {== M V ==}   |      |

### Local Control
|   SYNTAX   |   DESCRIPTION   |   EXAMPLE   |   NOTES   |
| --- | --- | --- | --- |
|   .T <br> CT <br> ``(space)`` <br> ({==RWY ID ==})   |   Instructs the selected aircraft to takeoff on the given RWY and inserts the departure field wind information.   |   .TCT {== 22L ==}   |      |
|   .T <br> CL <br> ``(space)`` <br> ({==RWY ID ==})   |   Instructs the selected aircraft to land on the given RWY and inserts the arrival field wind information.   |   .TCL {== 22L ==}   |      |

### RADAR - General
|   SYNTAX   |   DESCRIPTION   |   EXAMPLE   |   NOTES   |
| --- | --- | --- | --- |
|   .T <br> SQ <br> I   |   Squawk assigned code and ident.   |   .TSQI   |      |
|   .T <br> RC   |   RADAR Contact   |   .TRC   |      |
|   .T <br> RC <br> DB <br> ``(space)`` <br> ({== POINT ==})   |   RADAR Contact with their position (distance &bearing) relative to the given point   |   .TRCDB {== DJB ==}   |      |
|   .T <br> FH <br> ``(space)`` <br> ({==HEADINGD ==})   |   Fly the given heading.   |   .TFH {== 220 ==}   |      |
|   .T <br> T <br> ({==L/RD ==})   |   Turn left/right, fly the given heading.   |   .TT{==L 220 ==} <br> .TT{==R 220 ==}   |      |
|   .T <br> RST   |   RADAR Services Terminated   |   .TRST   |      |
|   .T <br> LMA   |   Leaving my airspace, radar services terminated.   |   .TLMA   |      |
|   .T <br> ({==D/C ==}) <br> M <br> ``(space)`` <br> ({==ALTITUDED ==})   |   Climb/Descend and maintain the given altitude.   |   .T{==D==}M {==8K==} <br> .T{==C==}M {==FL230==}   |      |

### Departure
|   SYNTAX   |   DESCRIPTION   |   EXAMPLE   |   NOTES   |
| --- | --- | --- | --- |
|   .T <br> HFR   |   Hold for release.   |   .THFR   |      |
|   .T <br> RFD   |   Issues a Release-For-Departure clearance that includes a 10min void time from the current time and an advisory to contact the issuing controller no later than 15min of intentions if not off in time.   |   .TRFD   |      |

### Approach
|   SYNTAX   |   DESCRIPTION   |   EXAMPLE   |   NOTES   |
| --- | --- | --- | --- |
|   .T <br> PTAC <br> ``(space)`` <br> ({==POINT ==}) <br> ``(space)`` <br> ({==HEADING ==}) <br> ``(space)`` <br> ({==ALTITUDE ==}) <br> ``(space)``<br> ({==IAP TYPE ==}) <br> ``(space)`` <br> ({==RUNWAY ==})      |   Issues standard PTAC given the relative position to the given point, including heading and altitude to fly until established and then the clearance to fly the given instrument approach type and the given runway.   |   .TPTAC {== DOTTI ==} {== 250 ==} {== 3K ==} {== ILS ==} {== 27R ==}   |      |
|   .T <br> PTAC <br> ILS <br>  ``(space)`` <br> ({==POINT ==}) <br> ``(space)`` <br> ({==HEADING ==}) <br> ``(space)`` <br> ({==ALTITUDE ==}) <br> ``(space)`` <br> ({==RUNWAY ==})   |   Completes the same thing as the .TPTAC command except the user does not have to indicate that ILS is the type of approach.   |   .TPTACILS {== DOTTI ==} {== 250 ==} {== 3K ==} {== 27R ==}  |      |
|   .T <br>  RFIS   |   Advises the selected aircraft of their position relative to their destination and then asks them to report the field in sight.   |   .TRFIS   |      |
|   .T <br> CVA <br> ``(space)`` <br> ({==RWY ID ==})   |   Clears the pilot for a visual approach to the given runway.   |   .TCVA {== 22L ==}   |      |

### Enroute
|   SYNTAX   |   DESCRIPTION   |   EXAMPLE   |   NOTES   |
| --- | --- | --- | --- |
|   .T <br>  ({==SUBJECT POINT ==}) <br> ({==E/W/N/S for PIT restrictions ==})   |   Issues a crossing restriction to the pilot for the given subject point.   |   .{==EMMMA==} <br> .{==SLT==} <br> .{==PSB==} <br> .{==PSB==}<ins>LGA</ins> <br> .{==CUTTA==}{==E==}   |   The .PSBLGA command is the one command that is different than the rest to set it apart from the base .PSB command.   |

## FE-BUDDY COMMANDS
The following aliases are generated every AIRAC cycle by FE-Buddy and merged into the ZOB alias file.

### In-Scope Reference
|   SYNTAX   |   DESCRIPTION   |   EXAMPLE   |   NOTES   |
| --- | --- | --- | --- |
|   .APT <br> ({==FAA or ICAO APT ID ==})   |   Returns the following for the given airport: FAA & ICAO code, Name, Elevation, Towered status, Responsible ARTCC, & ASOS frequency.  |   .APT{==PTK==}   |      |
|   .NAV <br> ({==NAVAID ID or Name ==})   |   Returns the following for the given NAVAID: ID, Frequency, Name, Type.   |   .NAV{==CGT==} <br> .NAV{==CHICAGOHEIGHTS==}   |   When entering the name, do not include special characters or spaces.   |
|   .ID <br> ({==AIR-CARRIER 3LID or TELEPHONY ==})   |   Returns the 3-Letter-ID (3LID) and Telephony of the given air-carrier.   |   .ID{==DAL==} <br> .ID{==NKP==} <br> .ID{==ABAKANAIR==}   |   When entering the telephony, do not include special characters or spaces.   |

### Data Display
|   SYNTAX   |   DESCRIPTION   |   EXAMPLE   |   NOTES   |
| --- | --- | --- | --- |
|   . ({==AWY ID ==}) <br> F   |   Displays all the fixes, including NAVAIDs and airports, for the given airway.   |   .{==J15==}F   |   ERAM-Only   |
|   . ({==APT ID ==}) <br> ({==DP/STAR ID ==}) <br> F   |   Displays all the fixes, including NAVAIDs, for the given DP/STAR.   Reference note [^2].   |   .{==DTW==}{==PAVYL==}F   |   ERAM-Only   |

### Chart Recall
|   SYNTAX   |   DESCRIPTION   |   EXAMPLE   |   NOTES   |
| --- | --- | --- | --- |
|   . ({==APT ID ==}) <br> TM <br>  C   |   Opens users webbrowser to the given airports Takeoff Minimums, ODP, and DVA (TM) page.   |   .{==D98==}TMC   |      |
|   . ({==APT ID ==}) <br> DVA <br> C   |   Opens users webbrowser to the given airports Diverse Vector Area page.   |   .{==SDL==}DVAC   |      |
|   . ({==APT ID ==}) <br> HS <br> C   |   Opens users webbrowser to the given airports Hot Spots (HS) page.   |   .{==EDF==}HSC   |      |
|   . ({==APT ID ==}) <br> LAHSO <br> C   |   Opens users webbrowser to the given airports Land and Hold Short (LAHSO) page.   |   .{==BZN==}LAHSOC   |      |
|   . ({==APT ID ==}) <br> APD <br>  C   |   Opens users webbrowser to the given airports Airport Diagram (APD) page.   |   .{==DTW==}APDC   |      |
|   . ({==APT ID ==}) <br> ({==DP/STAR ID ==}) <br> (<ins>Page # if not 1</ins>) <br> C   |   Opens users webbrowser to the given DP/STAR page.   Reference note #2.   |   .{==CLE==}{==BRWNZ==}C <br> .{==CLE ==}{==BRWNZ==}<ins>2</ins>C <br> .{==CLE==}{==BRWNZ==}<ins>3</ins>C   |      |
|   . ({==APT ID ==}) <br> ({==1st 5 CHAR OF DEP/STAR CHART NAME ==}) <br> (<ins>Page # if not 1</ins>) <br> C   |   Opens users webbrowser to the given DP/STAR page.   |   .{==TNX==}{==TUMBE==}C <br> .{==GEG ==}{==SPOKA==}C <br> .{==GEG==}{==SPOKA==}<ins>2</ins>C   |   These commands are reserved for procedures that do not have a computer code assigned to them.   |
|   . ({==APT ID==}) <br> ({==IAP SPad Code==}) <br> (<ins>Page # if not 1</ins>) <br> C   |   Opens users webbrowser to the given IAP page.   Reference note [^3].   |   .{==DTW==}{==I3R==}C <br> .{==CLE==}{==IY4L==}C <br> .{==CLE==}{==RU4L==}C   |      |
|   . ({==APT ID ==}) <br> V <br> ({==1st CHAR of EACH WORD IN THE VIS APP NAME ==}) <br> (<ins>Page # if not 1</ins>) <br> C   |   Opens users webbrowser to the given Charted Visual Approach page.   |   .{==SFO==}V{==QB==}C <br> .{==ASE==}V{==RF==}C   |      |

## Notes

[^1]: This command pulls data from the VATSIM API every 3 minutes, so it may not work for newly logged-on aircraft or for recently amended routes right away.
[^2]: 
    These commands are handy because many have similar variants. Example: to draw all fixes for the CLE BRWNZ arrival and also recall the chart, run one command, then press the Up Arrow to re-display it, Backspace to delete the last character, and type the letter for the other command. <br>
      **Example**:
      - .CLEBRWNZC
      - *Up arrow to display .CLEBRWNZC again, Then I just backspace to remove the C*
      - *Then type F resulting in:*
      - .CLEBRWNZF
[^3]: Reference the [FE-Buddy manual](https://docs.google.com/presentation/d/e/2PACX-1vRMd6PIRrj0lPb4sAi9KB7iM3u5zn0dyUVLqEcD9m2e71nf0UPyEmkOs4ZwYsQdl7smopjdvw_iWEyP/embed?slide=id.p) for SPad Code concept and syntax explanations. 
[^4]:
    Since this alias is intended for text-only pilots, and those situations are becoming rare, these commands won’t cover every possible scenario. Building out every variation would take too long, and it’s not reasonable to expect ATC to learn all the available syntax.

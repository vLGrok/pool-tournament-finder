# Billiards Tournament Finder - User Stories

## MVP Features

### Basic Tournament Search
**As a** billiards player  
**I want to** search for tournaments using basic criteria  
**So that** I can find events that match my basic preferences  

*Acceptance Criteria:*
- Search by location (city/state)
- Filter by date range using calendar interface
- Results show tournament name, date, location, entry fee
- Results update immediately as filters change
- Clear indication when no results match criteria
- Ability to clear all filters with one click

### Tournament Details View
**As a** billiards player  
**I want to** view detailed information about a specific tournament  
**So that** I can decide if I want to participate  

*Acceptance Criteria:*
- Display complete tournament information:
  - Name, date, time
  - Location with address
  - Entry fee and prize pool
  - Total spots and spots remaining
  - Skill level requirements
- Easy navigation back to search results
- Share button for tournament details

### Map View
**As a** traveling billiards player  
**I want to** see tournaments displayed on a map  
**So that** I can find events in specific geographic areas  

*Acceptance Criteria:*
- Interactive map showing tournament locations
- Clicking marker shows tournament preview
- List view alongside map stays in sync
- Map updates as filters change
- Basic zoom and pan controls
- Responsive on mobile devices

### Location-Based Search
**As a** local billiards player  
**I want to** find tournaments within a specific radius  
**So that** I can minimize travel time  

*Acceptance Criteria:*
- Enter zip code or city/state
- Select radius (10mi, 25mi, 50mi, etc.)
- Show distance from search location
- Sort results by distance
- Option to use current location

### Advanced Filtering
**As a** competitive player  
**I want to** filter tournaments by specific criteria  
**So that** I can find exactly the type of events I prefer  

*Acceptance Criteria:*
- Filter by:
  - Tournament format
  - Prize pool range
  - Skill level requirements
- Multiple filters can be combined
- Save favorite filter combinations
- Export filtered results

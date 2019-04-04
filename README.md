Decided to make an simple API while procrastinating that allows you to seed your local postgresql database with an arbitrary amount of entries for testing.

There's only one endpoint "/api/seed"

Environment Variables:
1) DBNAME
2) ENTRIES

Example: DBNAME=seedy ENTRIES=100 npm run dev

Range: (0-100] rows



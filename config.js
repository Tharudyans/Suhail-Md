const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_16_07_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgODUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTA4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDksXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTIwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTksXG4gICAgICAgIDEzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTgxLFxuICAgICAgICA1MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgxLFxuICAgICAgICA5OSxcbiAgICAgICAgMjI2LFxuICAgICAgICA3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDgyLFxuICAgICAgICA5NyxcbiAgICAgICAgODYsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzksXG4gICAgICAgIDE4MixcbiAgICAgICAgODUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjcsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDkxLFxuICAgICAgICA1NixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxODQsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjI0LFxuICAgICAgICA1OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMyxcbiAgICAgICAgODIsXG4gICAgICAgIDc0LFxuICAgICAgICAzNCxcbiAgICAgICAgMjEwLFxuICAgICAgICA1MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTcyLFxuICAgICAgICA4MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDgyLFxuICAgICAgICAxODQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjYsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA1LFxuICAgICAgICAzOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDc3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjA2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEsXG4gIAgICAgIDE0MCxcbiAgICAgICAgMTA0LFxuICAgICAgICA1MixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDYzLFxuICAgICAgICAwLFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDExMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQwLFxuICAgICAgICAxODQsXG4gICAgICAgIDYsXG4gICAgICAgIDUxLFxuICAgICAgICAxOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNCxcbiAgICAgICAgMjQyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjA4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDM3LFxuICAgICAgICA4OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDgzLFxuICAgICAgICA0NCxcbiAgICAgICAgMjQzLFxuICAgICAgICA1LFxuICAgICAgICAyOSxcbiAgICAgICAgNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTM1LFxuICAgICAgICA2NixcbiAgICAgICAgMjYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjksXG4gICAgICAgIDk3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDk5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJzODgrTXAzb25jVEg5YUQxUmsycW40QTk1NmtKNVpob3QrenlndjJNM1BRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzUxNTg2MDk1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJEQUZFOUQzNTdGM0ZEQUUyRUZFRDI2RjREQzIxRDhFNFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTk4NzkzOTRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc1MTU4NjA5NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMUM2REMxQkVBRUFGMzdCNUU4MjI1RTg5RDU0MkI5OEVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5ODc5Mzk0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidWhcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIi1oVWxwaWMwVHhtcHViTXQta2YxRkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYmM1NDMwNzEtYzYzYi00YzRkLWE3NzYtYzVmODQ2MDEwZDJlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkxLFxuICAgICAgMjI2LFxuICAgICAgMTM4LFxuICAgICAgMjIzLFxuICAgICAgNTMsXG4gICAgICA2MyxcbiAgICAgIDExMCxcbiAgICAgIDEwOCxcbiAgICAgIDE0NixcbiAgICAgIDE5NyxcbiAgICAgIDYsXG4gICAgICAxOTIsXG4gICAgICA0MyxcbiAgICAgIDQ4LFxuICAgICAgMjYsXG4gICAgICAxNjcsXG4gICAgICAyMjMsXG4gICAgICAxNzMsXG4gICAgICA1OSxcbiAgICAgIDIxN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTMsXG4gICAgICA0NCxcbiAgICAgIDE1MCxcbiAgICAgIDIzOSxcbiAgICAgIDIwNixcbiAgICAgIDE5NyxcbiAgICAgIDExNyxcbiAgICAgIDE4NSxcbiAgICAgIDIyLFxuICAgICAgOTIsXG4gICAgICAyNDAsXG4gICAgICAyMzIsXG4gICAgICAxNTYsXG4gICAgICA2MixcbiAgICAgIDg1LFxuICAgICAgMjQyLFxuICAgICAgNjAsXG4gICAgICA2LFxuICAgICAgMjEzLFxuICAgICAgMjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRFpIWFhGQkhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzUxNTg2MDk1OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxODYyMzQ0Nzk3NDA3MzoxNUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJ0aGFydWR5YXNhbXBhdGgzNzdcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJSzNrTjhFRU42TmpiUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlBuS1N4KzVoTy9XaC91Yjc2Q3pSY0d4bEdmZkRERDRlVENRMGFlL2xtMnc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSHlWNHNkRjQ1azBhY2p0NXN5OUVSTmUyZlNxVGRaRytwbU1Sa1QyYVM2SHZaYlZVRUVDYng5ajQvZ203R0ZzYkhPS3pyenZJZXd1TlRmRkg3VFFERHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNFQyM09POHZjRTZLUlJoc09JUXVIcmFkbTdkZ3VHU3MxSzZjZnFYOHI0d0xZUVpHNE9GaDNhMFk4L3ppbjFReVgydnpFRi8wakVDRDV6TkhsbklKQ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NTE1ODYwOTU6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5ODc5MzkyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQXBpXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBcGkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJIaHEvSjA4aHV2ckRlK3U2Y0lyek9RT2FWRE9Kd2xoNUlxQm9Sdi9pVGpzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyNzMyNDA0NTAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTg3OTM5NDY0NFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

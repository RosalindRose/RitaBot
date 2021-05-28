// -----------------
// Global variables
// -----------------

// Codebeat:disable[LOC,ABC,BLOCK_NESTING,ARITY]
const sendMessage = require("../../core/command.send");

// -------------------
// Available Settings
// -------------------

const getHistory = function getHistory (data)
{

   // ---------------
   // V1.0.0 History
   // ---------------

   const v100History = function v100History (data)
   {

      // -------------
      // Command Code
      // -------------

      data.color = "info";
      data.text = `V1.0.0 History \n`;
      data.text += `Version 1.0.1 - Release Date: 12/07/2019. \n`;
      data.text += `Version 1.0.2 - Release Date: 12/07/2019. \n`;
      data.text += `Version 1.0.3 - Release Date: 12/07/2019. \n`;
      data.text += `Version 1.0.4 - Release Date: 12/07/2019. \n`;
      data.text += `Version 1.0.5 - Release Date: 12/07/2019. \n`;
      data.text += `Version 1.0.6 - Release Date: 12/07/2019. \n`;
      data.text += `Version 1.0.7 - Release Date: 13/07/2019. \n`;

      // -------------
      // Send message
      // -------------

      return sendMessage(data);

   };

   // ---------------
   // V1.1.0 History
   // ---------------

   const v110History = function v110History (data)
   {

      // -------------
      // Command Code
      // -------------

      data.color = "info";
      data.text = `V1.1.0 History \n`;
      data.text += `Version 1.1.0 - Release Date: 13/07/2019. \n`;
      data.text += `Version 1.1.1 - Release Date: 13/07/2019. \n`;
      data.text += `Version 1.1.2 - Release Date: 13/07/2019. \n`;
      data.text += `Version 1.1.3 - Release Date: 14/07/2019. \n`;
      data.text += `Version 1.1.4 - Release Date: 15/07/2019. \n`;
      data.text += `Version 1.1.5 - Release Date: 27/07/2019. \n`;
      data.text += `Version 1.1.6 - Release Date: 27/07/2019. \n`;
      data.text += `Version 1.1.7 - Release Date: 07/09/2019. \n`;
      data.text += `Version 1.1.8 - Release Date: 09/09/2019. \n`;
      data.text += `Version 1.1.9 - Release Date: 14/03/2020. \n`;
      data.text += `Version 1.1.10 - Release Date: 31/03/2020. \n`;

      // -------------
      // Send message
      // -------------

      return sendMessage(data);

   };


   // ---------------
   // V1.2.0 History
   // ---------------

   const v120History = function v120History (data)
   {

      // -------------
      // Command Code
      // -------------

      data.color = "info";
      data.text = `V1.2.0 History \n`;
      data.text += `Version 1.2.0 - Release Date: 31/03/2020. \n`;
      data.text += `Version 1.2.0-1 - Release Date: 31/03/2020. \n`;
      data.text += `Version 1.2.0-2 - Release Date: 31/03/2020. \n`;
      data.text += `Version 1.2.0-3 - Release Date: 31/03/2020. \n\n`;


      // -------------
      // Send message
      // -------------

      return sendMessage(data);

   };

   // ---------------
   // V1.2.1 History
   // ---------------

   const v121History = function v121History (data)
   {

      // -------------
      // Command Code
      // -------------

      data.color = "info";
      data.text = `V1.2.1 History \n`;
      data.text += `Version 1.2.1 - Release Date: 13/09/2020. \n`;
      data.text += `Version 1.2.1-01/11 - Was not published. \n`;
      data.text += `Version 1.2.1-12 - Release Date: 13/09/2020. \n`;
      data.text += `Version 1.2.1-13 - Release Date: 14/09/2020. \n`;
      data.text += `Version 1.2.1-14 - Release Date: 14/09/2020. \n`;
      data.text += `Version 1.2.1-15 - Release Date: 14/09/2020. \n`;
      data.text += `Version 1.2.1-16 - Release Date: 14/09/2020. \n`;
      data.text += `Version 1.2.1-17 - Release Date: 14/09/2020. \n`;
      data.text += `Version 1.2.1-18 - Release Date: 23/09/2020. \n`;
      data.text += `Version 1.2.1-19 - Release Date: 23/09/2020. \n`;
      data.text += `Version 1.2.1-20 - Was not published. \n`;
      data.text += `Version 1.2.1-21 - Release Date: 30/09/2020. \n`;
      data.text += `Version 1.2.1-22 - Release Date: 30/09/2020. \n`;
      data.text += `Version 1.2.1-23 - Release Date: 05/10/2020. \n`;
      data.text += `Version 1.2.1-24 - Release Date: 05/10/2020. \n`;
      data.text += `Version 1.2.1-25 - Release Date: 07/10/2020. \n`;
      data.text += `Version 1.2.1-26 - Release Date: 08/10/2020. \n`;
      data.text += `Version 1.2.1-27 - Release Date: 10/10/2020. \n`;
      data.text += `Version 1.2.1-28 - Release Date: 10/10/2020. \n`;
      data.text += `Version 1.2.1-29 - Release Date: 17/04/2021. \n`;
      data.text += `Version 1.2.1-30 - Release Date: 22/04/2020. \n`;
      data.text += `Version 1.2.1-31 - Was not published. \n`;
      data.text += `Version 1.2.1-32 - Release Date: 24/04/2021. \n`;
      data.text += `Version 1.2.1-33 - Release Date: 24/04/2021. \n`;
      data.text += `Version 1.2.1-34 - Release Date: 24/04/2021. \n`;
      data.text += `Version 1.2.1-35 - Release Date: 24/04/2021. \n`;
      data.text += `Version 1.2.1-36 - Release Date: 25/04/2021. \n`;
      data.text += `Version 1.2.1-37 - Release Date: 25/04/2021. \n`;
      data.text += `Version 1.2.1-38 - Release Date: 25/04/2021. \n`;
      data.text += `Version 1.2.1-39 - Release Date: 25/04/2021. \n\n`;

      // -------------
      // Send message
      // -------------

      return sendMessage(data);

   };

   // ---------------
   // V1.2.2 History
   // ---------------

   const v122History = function v122History (data)
   {

      // -------------
      // Command Code
      // -------------

      data.color = "info";
      data.text = `V1.2.2 History \n`;
      data.text += `Version 1.2.2 - Release Date: 25/04/2021. \n`;
      data.text += `Version 1.2.2-1 - Release Date: 26/04/2021. \n`;
      data.text += `Version 1.2.2-2 - Release Date: 26/04/2021. \n`;
      data.text += `Version 1.2.2-3 - Release Date: 26/04/2021. \n`;
      data.text += `Version 1.2.2-4 - Release Date: 14/05/2021. \n`;
      data.text += `Version 1.2.2-5 - Release Date: 15/05/2021. \n`;
      data.text += `Version 1.2.2-6 - Was not published. \n`;
      data.text += `Version 1.2.2-7 - Release Date: 24/05/2021. \n`;
      data.text += `Version 1.2.2-8 - Release Date: 24/05/2021. \n`;
      data.text += `Version 1.2.3 - Release Date: 24/05/2021. \n`;
      data.text += `Version 1.2.3-1 - Release Date: 27/05/2021. \n`;
      data.text += `Version 1.2.3-2 - Release Date: 27/05/2021. \n`;
      data.text += `Version 1.2.3-3 - Release Date: 28/05/2021. \n\n`;

      // -------------
      // Send message
      // -------------

      return sendMessage(data);

   };

   // ---------------
   // V1.2.3 History
   // ---------------

   const v123History = function v123History (data)
   {

      // -------------
      // Command Code
      // -------------

      data.color = "info";
      data.text = `V1.2.3 History \n`;
      data.text += `Version 1.2.3 - Release Date: 24/05/2021. \n`;
      data.text += `Version 1.2.3-1 - Release Date: 27/05/2021. \n`;
      data.text += `Version 1.2.3-2 - Release Date: 27/05/2021. \n`;
      data.text += `Version 1.2.3-3 - Release Date: 28/05/2021. \n\n`;

      // -------------
      // Send message
      // -------------

      return sendMessage(data);

   };

   // --------------------------
   // Execute command if exists
   // --------------------------

   const validHistory = {
      "1.0": v100History,
      "1.1": v110History,
      "1.2.0": v120History,
      "1.2.1": v121History,
      "1.2.2": v122History,
      "1.2.3": v123History
   };

   const historyParam = data.cmd.params.split(" ")[0].toLowerCase();
   if (Object.prototype.hasOwnProperty.call(
      validHistory,
      historyParam
   ))
   {

      return validHistory[historyParam](data);

   }

   // ------------------------
   // Error for invalid param
   // ------------------------

   data.color = "error";
   data.text =
      `:warning:  **\`${data.cmd.params
      }\`** is not a valid history option. \nPlease use 1.0 / 1.1 / 1.2.0 / 1.2.1 / 1.2.2 / 1.2.3`;

   // -------------
   // Send message
   // -------------

   return sendMessage(data);

};

// --------------------------
// Proccess settings params
// --------------------------

module.exports = function run (data)
{

   // -----------------------------------
   // Error if settings param is missing
   // -----------------------------------

   if (!data.cmd.params)
   {

      // -------------
      // Command Code
      // -------------

      data.color = "info";
      data.text = `Rita Was Born on the 12/07/2019 \n`;
      data.text += `Rita Was Verified on the 27/05/2021\n\n`;
      data.text += `----------------- Version 1.0 ----------------- \n`;
      data.text += `Version 1.0.0 - Release Date: 12/07/2019. \n`;
      data.text += `There have been 7 iterations of this Version\n\n`;
      data.text += `----------------- Version 1.1 ----------------- \n`;
      data.text += `Version 1.1.0 - Release Date: 13/07/2019. \n`;
      data.text += `There have been 11 iterations of this Version\n\n`;
      data.text += `----------------- Version 1.2 ----------------- \n`;
      data.text += `Version 1.2.0 - Release Date: 31/03/2020. \n`;
      data.text += `Version 1.2.1 - Release Date: 13/09/2020. \n`;
      data.text += `Version 1.2.2 - Release Date: 25/04/2021. \n`;
      data.text += `Version 1.2.3 - Release Date: 24/05/2021. \n`;
      data.text += `There have been 46 iterations of this Version\n\n`;

      // -------------
      // Send message
      // -------------

      return sendMessage(data);

   }

   // ----------------
   // Execute setting
   // ----------------

   return getHistory(data);

};

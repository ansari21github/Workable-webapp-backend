const JobsApplied = require('../models/JobsApplied');

// module.exports.getJobsApplied = async (req, res) => {
//     try {
//       const { email } = req.params;
//       const jobsApplied = await JobsApplied.findOne({ email });
  
//       if (jobsApplied) {
//         return res.json({ msg: "success", jobsApplies: jobsApplied.jobsApplies });
//       } else {
//         return res.json({ msg: "User with given email not found." });
//       }
//     } catch (error) {
//       return res.json({ msg: "Error fetching jobsApplies." });
//     }
//   };


//   module.exports.addToJobsApplied = async (req, res) => {
//     try {
//       const { email, data } = req.body;
  
//       let jobsApplied = await JobsApplied.findOne({ email });
  
//       // Log the Bookmark ID and Data
//       console.log('JobsApplied ID:', jobsApplied ? jobsApplied._id : 'Not found');
//       console.log('Data:', data);
  
//       if (jobsApplied) {

//         if (!jobsApplied.jobsApplies) {
//           jobsApplied.jobsApplies = [];
//         }

//         const { jobsApplies } = jobsApplied;
//         const alreadyJobApplied = jobsApplies.find(
//           ({ _id }) => _id && _id.toString() === data._id
//         );
  
//         if (!alreadyJobApplied) {
//           await JobsApplied.updateOne(
//             { email },
//             { $push: { jobsApplies: data } }
//           );
//           jobsApplied = await JobsApplied.findOne({ email });
//         } else {
//           return res.json({ msg: 'Already added to the JobsApplied list.' });
//         }
//       } else {
//         jobsApplied = await JobsApplied.create({ email, jobsApplies: [data] });
//       }
  
//       // Log the updated Bookmark ID and Data
//       console.log('Updated JobsApplied ID:', jobsApplied ? jobsApplied._id : 'Not found');
//       console.log('Updated Data:', jobsApplied ? jobsApplied.jobsApplies : 'Not found');
  
//       return res.json({
//         msg: 'Successfully added to JobsApplied list.',
//         jobsApplies: jobsApplied.jobsApplies,
//       });
//     } catch (error) {
//       console.error('Error adding to jobsApplies:', error);
//       return res.json({
//         msg: 'Error adding to the JobsApplied list',
//       });
//     }
//   };

module.exports.getJobsApplied = async (req, res) => {
  try {
    const { email } = req.params;
    const jobsApplied = await JobsApplied.findOne({ email });

    if (jobsApplied) {
      return res.json({ msg: "success", jobsApplied: jobsApplied.jobsApplied });
    } else {
      return res.json({ msg: "User with given email not found." });
    }
  } catch (error) {
    console.error('Error fetching jobsApplied:', error);
    return res.json({ msg: "Error fetching jobsApplied." });
  }
};


module.exports.addToJobsApplied = async (req, res) => {
  try {
    const { email, data } = req.body;
    let jobsApplied = await JobsApplied.findOne({ email });

    // Log the Bookmark ID and Data
    console.log('JobsApplied ID:', jobsApplied ? jobsApplied._id : 'Not found');
    console.log('Data:', data);

    if (jobsApplied) {
      // Initialize jobsApplied if it doesn't exist
      if (!Array.isArray(jobsApplied.jobsApplied)) {
        jobsApplied.jobsApplied = [];
      }

      const alreadyJobApplied = jobsApplied.jobsApplied.find(
        ({ _id }) => _id && _id.toString() === data._id
      );

      if (!alreadyJobApplied) {
        await JobsApplied.updateOne(
          { email },
          { $push: { jobsApplied: data } }
        );
        jobsApplied = await JobsApplied.findOne({ email });
      } else {
        return res.json({ msg: 'Already added to the jobsApplied list.' });
      }
    } else {
      jobsApplied = await JobsApplied.create({ email, jobsApplied: [data] });
    }

    // Log the updated Bookmark ID and Data
    console.log('Updated JobsApplied ID:', jobsApplied ? jobsApplied._id : 'Not found');
    console.log('Updated Data:', jobsApplied ? jobsApplied.jobsApplied : 'Not found');

    return res.json({
      msg: 'Successfully added to jobsApplied list.',
      jobsApplied: jobsApplied.jobsApplied,
    });
  } catch (error) {
    console.error('Error adding to jobsApplied:', error);
    return res.json({
      msg: 'Error adding to the jobsApplied list',
    });
  }
};
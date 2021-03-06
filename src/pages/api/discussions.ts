// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export interface DiscussionsData {
  title: string;
  id: number;
  postContent: string;
  comments: Comment[];
}

export interface Comment {
  username: string;
  date: string;
  comment: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<DiscussionsData[]>
) {
  res.status(200).json([
    {
      title: "IBM Cloud Announcement",
      id: 1,
      postContent:
        "<p>Hi All</p> <p>Several labs/assignments in this course require the use of IBM Cloud Lite accounts that previously did not require credit cards to sign up. However effective October 1st, IBM Cloud has suspended creation of new Lite accounts. The course team is working with the IBM Cloud to come up with a solution for learners taking courses and we anticipate we will have permanent solution in the coming weeks.</p> <p>However in the mean time, if you do not want to provide your credit card to create an IBM Cloud account, a temporary solution is to create a 30-day trial account by going to: https://cocl.us/ibm_cloud_trial.</p> <p>However if you decide to create an IBM Cloud account with a credit card, it is recommended that you <strong>specify US dollars</strong> for billing for faster approval. The labs/assignments in the course are designed to be completed with free tiers or Lite plans to avoid costs. Be aware that your <strong>credit card may be charged if you exceed</strong> the free usage so it is a good practice to delete your instances once they are not required. And in case of any services that are billed on an hourly basis, please be sure stop or delete your instance as soon as your lab is complete.</p> <p><strong>Note:</strong> the IBM and Coursera course teams are not be responsible for any billed usage you may incur while using IBM Cloud.</p> <p>Regards,</p> <p>Pratiksha</p>",
      comments: [
        {
          username: "chibuike_edochie",
          date: "20-Mar-22",
          comment: "Thanks for the information and the provided alternative.",
        },
        {
          username: "kwesten",
          date: "23-May-22",
          comment:
            "I cannot find the 'get started' button. I managed to start the 30 days trial but keep turning in circles trying to find out how to get started. My screen just doesn't look like the example :( I always end up here",
        },
      ],
    },
    {
      title: "Use case for Tuple, List and Dictionary",
      id: 2,
      postContent:
        "<p>Tuple: As tuples has the property to not allow any modification of their elements, the use of this data structure fits best for historic data storage, for exemple, data of purchases at a grocery store Lists: Lists are best suited for data that need constant updating, such as costumers or suppliers of a specific business Dictionary: Considering the main characteristics of a dictionary, the unique values of its keys - which facilitates the search for a specific element - the use of this data structure could be used to register products<p>Related to: Python Data Structures</p>",
      comments: [
        {
          username: "ritwick_dey",
          date: "20-Apr-22",
          comment: "Thanks for the information and the provided alternative.",
        },
        {
          username: "reslo",
          date: "12-May-22",
          comment:
            "I cannot find the 'get started' button. I managed to start the 30 days trial but keep turning in circles trying to find out how to get started. My screen just doesn't look like the example :( I always end up here",
        },
      ],
    },
  ]);
}

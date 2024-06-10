/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Feedback as PrismaFeedback,
  Customer as PrismaCustomer,
} from "@prisma/client";

export class FeedbackServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.FeedbackCountArgs, "select">): Promise<number> {
    return this.prisma.feedback.count(args);
  }

  async feedbacks<T extends Prisma.FeedbackFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FeedbackFindManyArgs>
  ): Promise<PrismaFeedback[]> {
    return this.prisma.feedback.findMany<Prisma.FeedbackFindManyArgs>(args);
  }
  async feedback<T extends Prisma.FeedbackFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.FeedbackFindUniqueArgs>
  ): Promise<PrismaFeedback | null> {
    return this.prisma.feedback.findUnique(args);
  }
  async createFeedback<T extends Prisma.FeedbackCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FeedbackCreateArgs>
  ): Promise<PrismaFeedback> {
    return this.prisma.feedback.create<T>(args);
  }
  async updateFeedback<T extends Prisma.FeedbackUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FeedbackUpdateArgs>
  ): Promise<PrismaFeedback> {
    return this.prisma.feedback.update<T>(args);
  }
  async deleteFeedback<T extends Prisma.FeedbackDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.FeedbackDeleteArgs>
  ): Promise<PrismaFeedback> {
    return this.prisma.feedback.delete(args);
  }

  async getCustomer(parentId: string): Promise<PrismaCustomer | null> {
    return this.prisma.feedback
      .findUnique({
        where: { id: parentId },
      })
      .customer();
  }
}

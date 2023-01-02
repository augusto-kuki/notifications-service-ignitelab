import { Notification } from '@app/entities/notification';
import { NotificationsRepository } from '@app/repositories/notifications-respository';
import { Injectable } from '@nestjs/common';

interface GetRepicientNotificationsRequest {
  recipientId: string;
}

interface GetRepicientNotificationsResponse {
  notifications: Notification[];
}

@Injectable()
export class GetRecipientNotifications {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute({
    recipientId,
  }: GetRepicientNotificationsRequest): Promise<GetRepicientNotificationsResponse> {
    const notifications =
      await this.notificationsRepository.findManyByRecipientId(recipientId);

    return {
      notifications,
    };
  }
}

import { Notification } from '@app/entities/notification';

export class NotificationViewModel {
  static toHTTP(notification: Notification) {
    return {
      id: notification.id,
      createdAt: notification.createdAt,
      content: notification.content.value,
      category: notification.category,
      readAt: notification.readAt,
      recipientId: notification.recipientId,
    };
  }
}

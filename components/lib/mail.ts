import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

// Типы данных
export interface FormData {
    taskType: string;
    otherTaskType: string;
    providedInfo: string[];
    otherProvidedInfo: string;
    normativeBase: string;
    otherNormativeBase: string;
    region: string;
    urgency: string;
    otherUrgency: string;
    phone: string;
    messenger: string;
}

const sendCalculatorResults = async (
    formData: FormData,
): Promise<void> => {
    const toastId = toast.loading('Отправка заявки...', {
        position: 'bottom-right',
        style: {
            background: '#333',
            color: '#fff',
            border: '1px solid #404040',
        },
    });

    try {
        // Собираем HTML-контент для единого шаблона
        const htmlContent = `
      <h3><strong>Что требуется сделать:</strong></h3>
      <p>
        ${formData.taskType === 'Другое'
            ? formData.otherTaskType
            : formData.taskType}
      </p>

      <h3><strong>Исходные данные:</strong></h3>
      <ul>
        ${formData.providedInfo
            .map(
                (info) =>
                    `<li>• ${
                        info === 'Другое' ? formData.otherProvidedInfo : info
                    }</li>`
            )
            .join('')}
      </ul>

      <h3><strong>Нормативная база:</strong></h3>
      <p>
        ${formData.normativeBase === 'Другое'
            ? formData.otherNormativeBase
            : formData.normativeBase}
      </p>

      <h3><strong>Регион:</strong></h3>
      <p>${formData.region}</p>

      <h3><strong>Срочность:</strong></h3>
      <p>
        ${formData.urgency === 'Другое'
            ? formData.otherUrgency
            : formData.urgency}
      </p>

      <h3><strong>Контакты:</strong></h3>
      <p>
        Телефон: ${formData.phone}<br/>
        Мессенджер: ${formData.messenger || 'не указан'}
      </p>
    `;

        // Параметры для вашего единого шаблона в EmailJS
        const templateParams = {
            date: new Date().toLocaleString('ru-RU'),
            html_content: htmlContent,
            phone: formData.phone,
            messenger: formData.messenger || 'не указан',
            task_type:
                formData.taskType === 'Другое'
                    ? formData.otherTaskType
                    : formData.taskType,
            region: formData.region,
        };

        await emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            templateParams,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,

        );

        toast.success('Заявка успешно отправлена!', {
            id: toastId,
            duration: 4000,
            icon: '✅',
        });

    } catch (error) {
        console.error('Ошибка при отправке:', error);
        toast.error('Ошибка отправки. Пожалуйста, попробуйте еще раз.', {
            id: toastId,
            duration: 5000,
            icon: '❌',
        });
    }
};

export default sendCalculatorResults;

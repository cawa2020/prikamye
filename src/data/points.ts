export interface WorkPoint {
    number: string
    title: string
    description: string
}

export const workPoints: WorkPoint[] = [
    {
        number: '01',
        title: 'Оставьте заявку на расчет',
        description: 'Сделать это можно, позвонив по телефону, либо оставив данные в форме на нашем сайте. Наш менеджер свяжется с Вами и предоставит все необходимые Вам расчеты, в нужном формате'
    },
    {
        number: '02',
        title: 'Обмен уставными документами, подписание договора',
        description: 'В зависимости от политики Вашей компании, подписание договора может занять от 1 дня до 3 месяцев. Если у Вас сложный порядок проверки поставщиков, стоит заранее подготовить все документы'
    },
    {
        number: '03',
        title: 'Обработка заявки, подбор транспорта',
        description: 'Вы сообщаете нам основные характеристики вашего груза: вес, объем, размеры, стоимость (для страховки). Мы предлагаем Вам один или несколько вариантов отправки груза. Как правило варианты это сроки погрузки, выгрузки, стоимость'
    },
    {
        number: '04',
        title: 'Оформление заявки',
        description: 'После того, как был выбран один из предложенных вариантов, мы оформляем заявку. Для заполнения нам от Вас потребуются: адрес погрузки, тел. контактного лица на погрузке, адрес выгрузки, тел. конт. лица на выгрузке. Заполненную заявку мы направляем Вам на согласование и подписание'
    },
    {
        number: '05',
        title: 'Машина встает под погрузку',
        description: 'После того как была подписана заявка на перевозку, в оговоренные в ней сроки, машина встает под погрузку'
    },
    {
        number: '06',
        title: 'Оплата перевозки',
        description: 'Когда машина будет погружена, мы направляем Вам счет, на согласованную в заявке сумму. Оплата должна пройти по факту погрузки машины, до момента выгрузки'
    },
    {
        number: '07',
        title: 'Груз доставлен',
        description: 'Машина выгружается, водитель подписывает транспортные и товарные накладные (перечень и кол-во, требуемых к возврату док. оговаривается и согласовывается в заявке)'
    },
    {
        number: '08',
        title: 'Отправка документов',
        description: 'Мы направляем в Ваш адрес оригиналы документов: договор (при первой перевозке), заявки, счета, УПД, ТТН, ТН'
    }
]
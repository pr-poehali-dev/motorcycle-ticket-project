import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [showTicketDialog, setShowTicketDialog] = useState(false);
  const [ticketPurchased, setTicketPurchased] = useState(false);

  const handleBuyTicket = () => {
    setTicketPurchased(true);
    setTimeout(() => {
      setShowTicketDialog(false);
      setTicketPurchased(false);
    }, 3000);
  };

  const motorcycles = [
    {
      id: 1,
      name: 'Harley-Davidson',
      model: 'Street Bob',
      image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80',
    },
    {
      id: 2,
      name: 'Ducati',
      model: 'Monster 821',
      image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80',
    },
    {
      id: 3,
      name: 'Yamaha',
      model: 'MT-09',
      image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&q=80',
    },
    {
      id: 4,
      name: 'Kawasaki',
      model: 'Ninja 650',
      image: 'https://images.unsplash.com/photo-1568772684990-18e0f7b6d31d?w=800&q=80',
    },
  ];

  const events = [
    {
      date: '15 января 2025',
      title: 'Открытие сезона',
      description: 'Грандиозное открытие мотосезона с выставкой новинок',
    },
    {
      date: '22 февраля 2025',
      title: 'Зимний трюк-шоу',
      description: 'Экстремальные трюки на льду от профессионалов',
    },
    {
      date: '8 марта 2025',
      title: 'Женский мотопробег',
      description: 'Специальный заезд для прекрасных байкерш',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-purple-900/20 to-dark">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=1920&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/50 to-dark"></div>
        
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <div className="inline-block mb-6 px-6 py-2 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Мотоциклетное событие года</span>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-bold mb-8 bg-gradient-to-r from-primary via-purple-400 to-orange text-transparent bg-clip-text">
            Мотоцикл
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Невероятное шоу, выставка легендарных байков и незабываемые эмоции
          </p>
          
          <Button
            size="lg"
            onClick={() => setShowTicketDialog(true)}
            className="text-lg px-12 py-7 bg-gradient-to-r from-primary to-orange hover:from-primary/90 hover:to-orange/90 transform hover:scale-105 transition-all shadow-2xl shadow-primary/50"
          >
            <Icon name="Ticket" className="mr-2" size={24} />
            Купить билеты
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-primary" />
        </div>
      </section>

      <section className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange to-primary text-transparent bg-clip-text">
              О мероприятии
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange to-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-dark/50 backdrop-blur-md border-primary/20 hover:border-primary/50 transition-all hover:scale-105 group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="Calendar" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">3 дня</h3>
                <p className="text-gray-400">незабываемых впечатлений и драйва</p>
              </CardContent>
            </Card>

            <Card className="bg-dark/50 backdrop-blur-md border-orange/20 hover:border-orange/50 transition-all hover:scale-105 group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-orange to-yellow-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="Users" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">5000+ гостей</h3>
                <p className="text-gray-400">байкеров со всей страны</p>
              </CardContent>
            </Card>

            <Card className="bg-dark/50 backdrop-blur-md border-purple-500/20 hover:border-purple-500/50 transition-all hover:scale-105 group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="Trophy" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">20+ мероприятий</h3>
                <p className="text-gray-400">гонки, выставки, конкурсы</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Расписание
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-orange mx-auto"></div>
          </div>

          <div className="space-y-6">
            {events.map((event, index) => (
              <Card
                key={index}
                className="bg-dark/50 backdrop-blur-md border-primary/20 hover:border-primary/50 transition-all hover:translate-x-2 group"
              >
                <CardContent className="p-8 flex flex-col md:flex-row gap-6 items-start md:items-center">
                  <div className="flex-shrink-0 w-32 h-32 bg-gradient-to-br from-orange to-primary rounded-2xl flex flex-col items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name="Calendar" size={32} className="text-white mb-2" />
                    <span className="text-sm text-white/80 text-center px-2">{event.date}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-3 text-white">{event.title}</h3>
                    <p className="text-gray-400 text-lg">{event.description}</p>
                  </div>
                  <Button variant="outline" className="border-primary/50 hover:bg-primary/20">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-orange text-transparent bg-clip-text">
              Галерея мотоциклов
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-orange mx-auto mb-6"></div>
            <p className="text-gray-400 text-xl">Легендарные байки, которые будут представлены на выставке</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {motorcycles.map((bike) => (
              <Card
                key={bike.id}
                className="bg-dark/50 backdrop-blur-md border-primary/20 overflow-hidden hover:border-orange/50 transition-all group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={bike.image}
                    alt={bike.name}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {bike.name}
                  </h3>
                  <p className="text-gray-400 text-lg">{bike.model}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-br from-primary/20 via-purple-900/20 to-orange/20 backdrop-blur-md border-primary/30">
            <CardContent className="p-12">
              <Icon name="Zap" size={64} className="text-orange mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Не упусти момент!
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Количество билетов ограничено. Успей забронировать своё место на главном мото-событии года.
              </p>
              <Button
                size="lg"
                onClick={() => setShowTicketDialog(true)}
                className="text-lg px-12 py-7 bg-gradient-to-r from-orange to-primary hover:from-orange/90 hover:to-primary/90 transform hover:scale-105 transition-all shadow-2xl shadow-orange/50"
              >
                <Icon name="Ticket" className="mr-2" size={24} />
                Купить билеты сейчас
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-primary/20">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <div className="flex justify-center gap-6 mb-6">
            <Icon name="Instagram" size={24} className="hover:text-primary cursor-pointer transition-colors" />
            <Icon name="Facebook" size={24} className="hover:text-primary cursor-pointer transition-colors" />
            <Icon name="Twitter" size={24} className="hover:text-primary cursor-pointer transition-colors" />
          </div>
          <p>© 2025 Мотоцикл. Все права защищены.</p>
        </div>
      </footer>

      <Dialog open={showTicketDialog} onOpenChange={setShowTicketDialog}>
        <DialogContent className="bg-dark/95 backdrop-blur-xl border-primary/30">
          {!ticketPurchased ? (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold text-center mb-4">
                  <span className="bg-gradient-to-r from-primary to-orange text-transparent bg-clip-text">
                    Покупка билета
                  </span>
                </DialogTitle>
                <DialogDescription className="text-gray-400 text-center text-lg">
                  Вы собираетесь приобрести билет на мероприятие "Мотоцикл"
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6 py-6">
                <Card className="bg-gradient-to-br from-primary/10 to-orange/10 border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-300">Стандартный билет</span>
                      <span className="text-2xl font-bold text-primary">2500₽</span>
                    </div>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-primary" />
                        Доступ ко всем мероприятиям
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-primary" />
                        Фуд-корт зона
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-primary" />
                        Сувенирная продукция
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Button
                  onClick={handleBuyTicket}
                  className="w-full py-6 text-lg bg-gradient-to-r from-primary to-orange hover:from-primary/90 hover:to-orange/90"
                  size="lg"
                >
                  <Icon name="CreditCard" className="mr-2" size={20} />
                  Оплатить билет
                </Button>
              </div>
            </>
          ) : (
            <div className="py-12 text-center animate-scale-in">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                <Icon name="Check" size={48} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Вы купили билет!</h3>
              <p className="text-xl text-gray-300">Ждите 1 часть.</p>
              <p className="text-gray-400 mt-4">Билет отправлен на вашу почту</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;

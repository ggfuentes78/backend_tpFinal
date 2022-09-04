const Config=require('../config/index');
const twilio=require('twilio');
const {logger,  loggeoPeticiones} = require('./logger');


class Twilio {
  twilio;

  constructor() {
    this.twilio = twilio(Config.TWILIO_ACCOUNT_ID, Config.TWILIO_TOKEN);
  }

  async sendWhatsAppMessage(celuDestino, mensaje) {
    try{      
      const params = {
        body: mensaje,
        from: `whatsapp:${Config.TWILIO_WHATSAPP}`,
        to: `whatsapp:${celuDestino}`,
      };

      const response = await this.twilio.messages.create(params);
      logger.info(`Mensaje de Whatsapp enviado a ${celuDestino}`)
      return response;
    }catch(err){
      logger.error(err.stack)
      return err.stack
    }
  }

  async sendSMSMessage(celudestino, mensaje) {
    try{
      const params = {
      body: mensaje,
      from: Config.TWILIO_CELLPHONE,
      to: celudestino,
      };
      const response = await this.twilio.messages.create(params);
      logger.info(`Mensaje SMS enviado a ${celudestino}`)
      return response;
    }catch(err){
      logger.error(err.stack)
      return err.stack
    }
  }
}

const TwilioService = new Twilio();

module.exports=TwilioService;
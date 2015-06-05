;(function(global, $){

	var Greetr = function(firstname, lastname, language){
		return new Greetr.init(firstname, lastname, language);
	};
	
	var supportedLangs = ['en', 'es'];
	
	var greetings = {
	  en : 'Hello',
	  es : 'Hola'
	};
	var formalGreetings = {
	  en : 'Greetings',
	  es : 'Saludos'
	};
	
	var logMessages ={
	en : 'Logged In',
	es : 'Inicio sesion'
	};
	
	//Here there will be, methods/properties that I want to use inside the object thats returned from Greetr.
	Greetr.prototype = {
		fullName: function(){
			return this.firstname + ' ' + this.lastname;
		},
		validateLang : function(){
			if(supportedLangs.indexOf(this.language) === -1){
				throw " Invalid Language ";
			}
		},
		regularGreeting: function(){
			return greetings[this.language] + " " + this.firstname;
		},
		formalGreeting: function(){
			return formalGreetings[this.language] + " " + this.firstname + " " + this.lastname
		},
		greet: function(formal){
			var msg;
			if(formal){
				msg = this.formalGreeting();
			}else{
				msg = this.regularGreeting();
			}
			console.log(msg);
			// for making this function chainable
			return this;
		},
		log: function(){
			if(console){
				console.log(logMessages[this.language] + ": " + this.fullName());
			}
			return this;
		},
		setLang :function(lang){
			this.language = lang;
			this.validateLang();
			return this;
		},
		HTMLGreeting: function(selector, formal){
			if(!$){throw 'jQuery not loaded';}
			if(!selector){throw 'Missing jQuery Selector';}
			var msg;
			if(formal){
				msg = this.formalGreeting();
				
			}else{
				msg = this.regularGreeting();
			}
console.log('selector ' + $(selector).html());

			$(selector).html(msg);
			return this;
		}
	};
	
	//builds the object, sets the values
	Greetr.init = function(firstname, lastname, language){
		var self = this;
		console.log(self);
		self.firstname = firstname || "Paridhi";
		self.lastname = lastname || "Dixit";
		self.language = language || "en";
	};
	
	//Any objects created with this person should point to Greetr.prototype so that they can have access to all the methods.
	// Greetr.init.prototype is the prototype obejct of the Greetr.init object (creater by the function).
	Greetr.init.prototype = Greetr.prototype;
	
	//exposing the Greetr function to the outside world by attaching it to the global object and giving it an alias
	global.Greetr= global.G$ = Greetr;
	
})(window, $);
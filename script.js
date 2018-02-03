define(['jquery'], function($){
	var CustomWidget = function () {
		var self = this;
		this.callbacks = {
			render: function(){
				console.log('render');
				return true;
			},
			init: function(){
      	console.log('init');
      	return true;
      },
      bind_actions: function(){
      	console.log('bind_actions');
      	return true;
      },
      settings: function(){
      	return true;
      },
      onSave: function(){
      	alert('click');
      	return true;
      },
      destroy: function(){

      },
      contacts: {
					//select contacts in list and clicked on widget name
					selected: function(){
						var c_data = self.list_selected().selected;
						$(self.cdata).remove();
						self.cdata = c_data;
						// console.log(self.ldata);
						if (self.cdata) {
							var clink = 'https://newdemonew.amocrm.ru/ajax/contacts/export/?export_type=csv';
							var data = self.cdata;
							// console.log(data);
							var cparam;
							for (var i=0; i<data.length; i++) {
								cparam = '&filter[ID][]=' + data[i].id;
								// console.log(lparam);
								clink += cparam;
								// console.log(llink);
							}
							// console.log(data);
							// console.log(llink);
							window.open(clink, '_blank');
						};
						$('div#card_widgets_overlay').remove();
						$('div#widgets_block').remove();
					}
				},
				leads: {
					//select leads in list and clicked on widget name
					selected: function(){
						var l_data = self.list_selected().selected;
						$(self.ldata).remove();
						self.ldata = l_data;
						// console.log(self.ldata);
						if (self.ldata) {
							var llink = 'https://newdemonew.amocrm.ru/ajax/leads/export/?export_type=csv';
							var data = self.ldata;
							// console.log(data);
							var lparam;
							for (var i=0; i<data.length; i++) {
								lparam = '&filter[ID][]=' + data[i].id;
								// console.log(lparam);
								llink += lparam;
								// console.log(llink);
							}
							// console.log(data);
							// console.log(llink);
							window.open(llink, '_blank');
						};
						$('div#card_widgets_overlay').remove();
						$('div.widgets_block').css('display','none');
					}
				},
				tasks: {
					//select taks in list and clicked on widget name
					selected: function(){
						var t_data = self.list_selected().selected;
						console.log(t_data);
					}
				}
			};
			return this;
		};

		return CustomWidget;
	});

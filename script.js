define(['jquery'], function($){
	var CustomWidget = function () {
		var self = this;
		this.callbacks = {
			render: function(){
				w_code = self.get_settings().widget_code;
				self.render_template({
					caption: {
						class_name: 'js-ac-caption',
						html: ''
					},
					body: '',
					render: '\
					<div class="ac-form-button ac_sub">SEND</div>'
				});
				console.log('render');
				return true;
			},
			init: function(){
				console.log('init');
				return true;
			},
			bind_actions: function(){
				if (self.system().area == 'llist' || 'clist') {
					$('.ac-form-button').on('click', function () {
						var llink = 'https://newdemonew.amocrm.ru/ajax/leads/export/?export_type=csv';
						var data = self.ldata;
						console.log(data);
						var lparam;
						for (var i=0; i<data.length; i++) {
							lparam = '&filter[ID][]=' + data[i].id;
							console.log(lparam);
							llink += lparam;
							console.log(llink);
						}
						console.log(data);
						console.log(llink);
						$.get(llink, function() {
							console.log('Загрузка завершена.');
						});
					});
				};
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
						console.log(c_data);
					}
				},
				leads: {
					//select leads in list and clicked on widget name
					selected: function(){
						var l_data = self.list_selected().selected;
						$(self.ldata).remove();
						self.ldata = l_data;
						console.log(self.ldata);
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

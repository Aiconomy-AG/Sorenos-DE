// Fix the confict suggestion search in Debut theme
if (typeof theme !== 'undefined' && theme.hasOwnProperty('settings')) theme.settings.predictiveSearchEnabled = false;
// Override Settings
var boostPFSFilterConfig = {
	general: {
		limit: boostPFSThemeConfig.custom.products_per_page,
		// Optional
		loadProductFirst: true,
		styleScrollToTop: 'style2',
		defaultDisplay: boostPFSThemeConfig.custom.layout,
		showPlaceholderProductList: true
	},
};

(function() {
	BoostPFS.inject(this);
	
	ProductGridItem.prototype.compileTemplate = function(data) {
		if(!data) data = this.data;
        //console.log('data',data);
		/*** Prepare data ***/
		var images = data.images_info;
		// Displaying price base on the policy of Shopify, have to multiple by 100
		var soldOut = !data.available; // Check a product is out of stock
		var onSale = data.compare_at_price_min > data.price_min; // Check a product is on sale
		var priceVaries = data.price_min != data.price_max; // Check a product has many prices
		// Get First Variant (selected_or_first_available_variant)
		var firstVariant = data['variants'][0];
		if (Utils.getParam('variant') !== null && Utils.getParam('variant') != '') {
			var paramVariant = data.variants.filter(function(e) {
				return e.id == Utils.getParam('variant');
			});
			if (typeof paramVariant[0] !== 'undefined') firstVariant = paramVariant[0];
		} else {
			for (var i = 0; i < data['variants'].length; i++) {
				if (data['variants'][i].available) {
					firstVariant = data['variants'][i];
					break;
				}
			}
		}
		/*** End Prepare data ***/
		
		// Get Template
		var itemHtml = boostPFSTemplate.productGridItemHtml;
		// Add a specific class for grid item
		var itemGridWidthClass = '';
		var imageSize = '600x600';

		switch (boostPFSConfig.custom.products_per_row) {
			case 2:
				itemGridWidthClass = 'medium-up--one-half';
				imageSize = '540x600';
				break;
			case 3:
				itemGridWidthClass = 'small--one-half medium-up--one-third';
				imageSize = '345x550';
				break;
			case 4:
				itemGridWidthClass = 'small--one-half medium-up--one-quarter';
				imageSize = '250x';
				break;
			case 5:
				itemGridWidthClass = 'small--one-half medium-up--one-fifth';
				imageSize = '195x';
				break;
		}
		itemHtml = itemHtml.replace(/{{itemGridWidthClass}}/g, itemGridWidthClass);

		// Add soldOut class
		var itemSoldOutClass = soldOut ? boostPFSTemplate.soldOutClass : '';
		itemHtml = itemHtml.replace(/{{itemSoldOutClass}}/g, itemSoldOutClass);

		// Add soldOut label
		var itemSoldOutLabel = soldOut ? boostPFSTemplate.soldOutLabelGridHtml : '';
		itemHtml = itemHtml.replace(/{{itemSoldOutLabel}}/g, itemSoldOutLabel);

		var imgId = 'ProductCardImage-' + data.id;
		var wrapperId = 'ProductCardImageWrapper-' + data.id;

		// Build Image style
		var imageStyle = buildImageStyle(data);
		itemHtml = itemHtml.replace(/{{imageStyle}}/g, imageStyle);

		// Add Images
		var aspect_ratio = '';
		var itemImagesHtml = '<div id="' + wrapperId + '" class="grid-view-item__image-wrapper js">';
		itemImagesHtml += '<div style="padding-top:';
		if (images.length > 0) {
			aspect_ratio = images[0]['width'] / images[0]['height'];
			itemImagesHtml += 1 / aspect_ratio * 100;
		} else {
			itemImagesHtml += 100;
		}
		itemImagesHtml += '%;">';
		itemImagesHtml += '<img id="' + imgId + '" ' +
			'class="grid-view-item__image lazyload" ' +
			'src="' + Utils.getFeaturedImage(images, '300x300') + '" ' +
			'data-src="' + Utils.getFeaturedImage(images, '{width}x') + '" ' +
			'data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" ' +
			'data-aspectratio="' + aspect_ratio + '" ' +
			'data-sizes="auto" ' +
			'alt="{{itemTitle}}">';
		itemImagesHtml += '</div>';
		itemImagesHtml += '</div>';

		var image_size = boostPFSConfig.custom.max_height + 'x' + boostPFSConfig.custom.max_height;
		var max_width = images.length > 0 ? boostPFSConfig.custom.max_height * aspect_ratio : 0;
		itemImagesHtml += '<noscript><img class="grid-view-item__image" src="' + Utils.getFeaturedImage(images, image_size + '@2x') + '" alt="{{itemTitle}}" style="max-width: ' + max_width + 'px;"></noscript>';
		itemHtml = itemHtml.replace(/{{itemImages}}/g, itemImagesHtml);

		// Add Vendor
		var itemVendorHtml = boostPFSConfig.custom.vendor_enable ? boostPFSTemplate.vendorGridHtml : '';
		itemHtml = itemHtml.replace(/{{itemVendor}}/g, itemVendorHtml);

		// Add Price
		var itemPriceHtml = buildPrice(data, onSale, priceVaries);
		itemHtml = itemHtml.replace(/{{itemPrice}}/g, itemPriceHtml);

		// Add main attribute
		itemHtml = itemHtml.replace(/{{itemId}}/g, data.id);        
		itemHtml = itemHtml.replace(/{{itemTitle}}/g, data.title);
		itemHtml = itemHtml.replace(/{{itemVendorLabel}}/g, data.vendor);
		itemHtml = itemHtml.replace(/{{itemUrl}}/g, Utils.buildProductItemUrl(data));

		return itemHtml;
	}

	ProductListItem.prototype.compileTemplate = function(data) {
		if (!data) data = this.data;
		/*** Prepare data ***/
		var images = data.images_info;
		// Displaying price base on the policy of Shopify, have to multiple by 100
		var soldOut = !data.available; // Check a product is out of stock
		var onSale = data.compare_at_price_min > data.price_min; // Check a product is on sale
		var priceVaries = data.price_min != data.price_max; // Check a product has many prices
		// Get First Variant (selected_or_first_available_variant)
		var firstVariant = data['variants'][0];
		if (Utils.getParam('variant') !== null && Utils.getParam('variant') != '') {
			var paramVariant = data.variants.filter(function(e) {
				return e.id == Utils.getParam('variant');
			});
			if (typeof paramVariant[0] !== 'undefined') firstVariant = paramVariant[0];
		} else {
			for (var i = 0; i < data['variants'].length; i++) {
				if (data['variants'][i].available) {
					firstVariant = data['variants'][i];
					break;
				}
			}
		}
		/*** End Prepare data ***/
	
		// Get Template
		var itemHtml = boostPFSTemplate.productListItemHtml;
	
		// Add onSale label
		var itemSaleLabel = onSale ? boostPFSTemplate.saleLabelListHtml : '';
		itemHtml = itemHtml.replace(/{{itemSaleLabel}}/g, itemSaleLabel);
	
		// Add soldOut label
		var itemSoldOutLabel = soldOut ? boostPFSTemplate.soldOutLabelListHtml : '';
		itemHtml = itemHtml.replace(/{{itemSoldOutLabel}}/g, itemSoldOutLabel);
	
		// Add Thumbnail
		var itemThumbUrl = images.length > 0 ? Utils.optimizeImage(images[0]['src'], '600x600') : boostPFSConfig.general.no_image_url;
		itemHtml = itemHtml.replace(/{{itemThumbUrl}}/g, itemThumbUrl);
	
		// Add Vendor
		var itemSmallVendorHtml = boostPFSConfig.custom.vendor_enable ? boostPFSTemplate.vendorSmallListHtml : '';
		itemHtml = itemHtml.replace(/{{itemSmallVendor}}/g, itemSmallVendorHtml);
		var itemMediumVendorHtml = boostPFSConfig.custom.vendor_enable ? boostPFSTemplate.vendorMediumListHtml : '';
		itemHtml = itemHtml.replace(/{{itemMediumVendor}}/g, itemMediumVendorHtml);
	
		// Add Price
		var itemPriceHtml = buildPrice(data, onSale, priceVaries);
		itemHtml = itemHtml.replace(/{{itemPrice}}/g, itemPriceHtml);
	
		// Add main attribute
		itemHtml = itemHtml.replace(/{{itemTitle}}/g, data.title);
		itemHtml = itemHtml.replace(/{{itemVendorLabel}}/g, data.vendor);
		itemHtml = itemHtml.replace(/{{itemUrl}}/g, Utils.buildProductItemUrl(data));
	
		return itemHtml;
	}

	// Build Image style
	function buildImageStyle(data) {
		var images = data.images_info;
		var imgId = 'ProductCardImage-' + data.id;
		var wrapperId = 'ProductCardImageWrapper-' + data.id;
		var imageStyle = '';
		if (images.length > 0) {
			var image = images[0];
			var width = boostPFSConfig.custom.max_height;
			var height = boostPFSConfig.custom.max_height;
			var aspect_ratio = image.width / image.height;
			var small_style = true;
			var container_aspect_ratio = width * 1.0 / height;

			if (image.aspect_ratio < 1.0) {
				var maximum_width = height * aspect_ratio;
				if (image.height <= height) {
					var maximum_height = image.height;
					maximum_width = image.width;
				} else {
					var maximum_height = height;
				}
			} else if (aspect_ratio < container_aspect_ratio) {
				var maximum_height = height / aspect_ratio;
				if (image.height <= height) {
					var maximum_height = image.height;
					var maximum_width = image.width;
				} else {
					var maximum_height = height;
					var maximum_width = height * aspect_ratio;
				}
			} else {
				var maximum_height = height / aspect_ratio;
				if (image.width <= width) {
					maximum_height = image.height;
					var maximum_width = image.width
				} else {
					var maximum_width = width;
					maximum_height = maximum_width / aspect_ratio;
				}
			}

			imageStyle += '<style>';
			if (small_style) imageStyle += '@media screen and (min-width: 750px) {';
			imageStyle += '#' + imgId + ' {' +
				'max-width: ' + maximum_width + 'px;' +
				'max-height: ' + maximum_height + 'px;' +
				'}' +
				'#' + wrapperId + ' {' +
				'max-width: ' + maximum_width + 'px;' +
				'max-height: ' + maximum_height + 'px;' +
				'}';
			if (small_style) imageStyle += '}';

			if (small_style) {
				if (aspect_ratio < 1) {
					maximum_width = 750 * aspect_ratio;
				} else {
					if (image.width < 750) {
						maximum_width = image.width;
					} else {
						maximum_width = 750;
					}
				}
				imageStyle += '@media screen and (max-width: 749px) {'
				imageStyle += '#' + imgId + ' {' +
					'max-width: ' + maximum_width + 'px;' +
					'max-height: 750px;' +
					'}' +
					'#' + wrapperId + ' {' +
					'max-width: ' + maximum_width + 'px;' +
					'}';
				imageStyle += '}';
			}
			imageStyle += '</style>';
		}
		return imageStyle;
	}

	function buildPrice(data, onSale, priceVaries) {
		var priceHtml = '',
			onSaleClass = onSale ? ' price--on-sale' : '';
	
		priceHtml += '<dl class="price' + onSaleClass + '" data-price>';
		if (boostPFSConfig.custom.vendor_enable) {
			priceHtml += '<div class="price__vendor">';
			priceHtml += '<dt>';
			priceHtml += '<span class="visually-hidden">' + boostPFSConfig.label.vendor + '</span>';
			priceHtml += '</dt>';
			priceHtml += '<dd>';
			priceHtml += data.vendor;
			priceHtml += '</dd>';
			priceHtml += '</div>';
		}
		priceHtml += '<div class="price__regular">';
		priceHtml += '<dt>';
		priceHtml += '<span class="visually-hidden visually-hidden--inline">' + boostPFSConfig.label.regular_price + '</span>';
		priceHtml += '</dt>';
		priceHtml += '<dd>';
		priceHtml += '<span class="price-item price-item--regular" data-regular-price>';
		if (data.available) {
			if (onSale) {
				priceHtml += Utils.formatMoney(data.compare_at_price_min, Globals.moneyFormat);
			} else {
				priceHtml += Utils.formatMoney(data.price_min, Globals.moneyFormat);
			}
		} else {
			priceHtml += boostPFSConfig.label.sold_out;
		}
		priceHtml += '</span>';
		priceHtml += '</dd>';
		priceHtml += '</div>';
		priceHtml += '<div class="price__sale">';
		priceHtml += '<dt>';
		priceHtml += '<span class="visually-hidden visually-hidden--inline">' + boostPFSConfig.label.sale_price + '</span>';
		priceHtml += '</dt>';
		priceHtml += '<dd>';
		priceHtml += '<span class="price-item price-item--sale" data-sale-price>';
		priceHtml += Utils.formatMoney(data.price_min, Globals.moneyFormat);
		priceHtml += '</span> ';
		priceHtml += '<span class="price-item__label" aria-hidden="true">' + boostPFSConfig.label.sale + '</span>';
		priceHtml += '</dd>';
		priceHtml += '</div>';
		priceHtml += '</dl>';
	
		return priceHtml;
	}

	/// Build Pagination
	ProductPaginationDefault.prototype.compileTemplate = function(totalProduct) {
		if (!totalProduct) totalProduct = this.totalProduct;
		// Get page info
		var currentPage = parseInt(Globals.queryParams.page);
		var totalPage = Math.ceil(totalProduct / Globals.queryParams.limit);
	
		// If it has only one page, clear Pagination
		if (totalPage <= 1) {
			return '';
		}
	
		var paginationHtml = boostPFSTemplate.paginateHtml;

		// Build Previous
		var previousHtml = (currentPage > 1) ? boostPFSTemplate.previousActiveHtml : boostPFSTemplate.previousDisabledHtml;
		previousHtml = previousHtml.replace(/{{itemUrl}}/g, Utils.buildToolbarLink('page', currentPage, currentPage - 1));
		paginationHtml = paginationHtml.replace(/{{previous}}/g, previousHtml);

		// Build Next
		var nextHtml = (currentPage < totalPage) ? boostPFSTemplate.nextActiveHtml : boostPFSTemplate.nextDisabledHtml;
		nextHtml = nextHtml.replace(/{{itemUrl}}/g, Utils.buildToolbarLink('page', currentPage, currentPage + 1));
		paginationHtml = paginationHtml.replace(/{{next}}/g, nextHtml);

		// Build page items
		var currentPage = boostPFSConfig.label.current_page.replace(/{{ current }}/g, currentPage).replace(/{{ total }}/g, totalPage);
		paginationHtml = paginationHtml.replace(/{{pageItems}}/g, currentPage);

		return paginationHtml;
	};

	// Build Sorting
	ProductSorting.prototype.compileTemplate = function() {
		var html = '';
		if (boostPFSTemplate.hasOwnProperty('sortingHtml')) {
			var sortingArr = Utils.getSortingList();
			if (sortingArr) {
				// Build content
				var sortingItemsHtml = '';
				for (var k in sortingArr) {
					sortingItemsHtml += '<option value="' + k + '">' + sortingArr[k] + '</option>';
				}
				html = boostPFSTemplate.sortingHtml.replace(/{{sortingItems}}/g, sortingItemsHtml);
			}
		}
		return html;
	};

	// Build Display type
	ProductDisplayType.prototype.compileTemplate = function() {
		var itemHtml = '<span>View As </span>';
		itemHtml += '<a href="' + Utils.buildToolbarLink('display', 'list', 'grid') + '" title="Grid view" class="{{class.productDisplayType}}-item {{class.productDisplayType}}-grid" data-view="grid"><span class="icon-fallback-text"><span class="fallback-text">Grid view</span></span></a>';
		itemHtml += '<a href="' + Utils.buildToolbarLink('display', 'grid', 'list') + '" title="List view" class="{{class.productDisplayType}}-item {{class.productDisplayType}}-list" data-view="list"><span class="icon-fallback-text"><span class="fallback-text">List view</span></span></a>';
		itemHtml = itemHtml.replace(/{{class.productDisplayType}}/g, Class.productDisplayType);

		return itemHtml;
	};

	// Add additional feature for product list, used commonly in customizing product list
	ProductList.prototype.afterRender = function(data) {
       
		if (!data) data = this.data;
		var productSelector = jQ(Selector.products);
		if (Globals.queryParams.display == 'list') {
			if (productSelector.children('.list-view-items').length == 0) {
				productSelector.children().wrapAll('<ul class="list-view-items"></ul>');
			}
			productSelector.removeClass('grid grid--uniform grid--view-items');
		} else {
			if (productSelector.children('.list-view-items').length > 0) {
				productSelector.children('.list-view-items').children().unwrap();
			}
			productSelector.addClass('grid grid--uniform grid--view-items');
		}
       setTimeout(function(){
         if($('.c_exit').length > 0){
  }else{
    $('.boost-pfs-filter-top-sorting-select option:eq(2)').hide();
    $('.boost-pfs-filter-top-sorting-select option:eq(3)').hide();
  }
       $('.add_all').remove();  
       $('.boost-pfs-filter-option-kategorie .boost-pfs-filter-option-value:eq(0)').text('Werkzeuge').prepend('<font class="add_all">Alle </font>');
        }, 100);
	}

	// Build Additional Elements
	FilterResult.prototype.afterRender = function(data, eventType) {
       
		if (!data) data = this.data;
		var totalProduct = '';
		if (data.total_product == 1) {
			totalProduct = boostPFSConfig.label.items_with_count_one.replace(/{{ count }}/g, data.total_product);
		} else {
			totalProduct = boostPFSConfig.label.items_with_count_other.replace(/{{ count }}/g, data.total_product);
		}
		jQ('.boost-pfs-filter-total-product').html(totalProduct);
      
        setTimeout(function(){
          //$('.boost-pfs-filter-option-kategorie .boost-pfs-filter-option-value').prepend('alle ');
  
          let curr_lang = $("html").attr("lang");   
          let lang_index = 0;
          if(curr_lang == 'de'){
            lang_index = 0;
          }
          if(curr_lang == 'en'){
            lang_index = 1;
          }
          if(curr_lang == 'fr'){
            lang_index = 2;
          }
          if(curr_lang == 'it'){
            lang_index = 3;
          }

          let lang_prefix_link = ['','/en',"/fr","/it"];
          
          let Produkte = ['Produkte','Products',"Produits","Prodotti"];
          let Sonnenschutzfolien = ['Sonnenschutzfolien', 'Sun protection films', 'Films de protection solaire', 'Pellicole solari'];
          let Isolationsfolien = ['Isolationsfolien', 'Insulation films', 'Films d’isolation', 'Pellicole isolanti'];
          let Sicherheitsfolien = ['Sicherheitsfolien', 'Security films', 'Films de sécurité', 'Pellicole di sicurezza'];
          let Vogelschutzfolien = ['Vogelschutzfolien', 'Bird protection films', 'Films de protection pour oiseaux', 'Pellicole protettive per uccelli'];
          let Designfolien = ['Designfolien', 'Design films', 'Films de design', 'Pellicole di design'];
          
          let Anwendungsbereich = ['Anwendungsbereich','Area of application',"Champ d'application","Area di applicazione"];
          let Aussenfolien  = ['Aussenfolien','Exterior foils',"Films extérieurs","Pellicole esterne"];
          let Innenfolien  = ['Innenfolien','Inner foils',"Films intérieurs","Fogli interni"];

          jQ('.boost-pfs-filter-options-wrapper .boost-pfs-filter-option').each(function () {
              let filterText = jQ(this).find('.boost-pfs-filter-option-value').text().trim();
            
              jQ(this).find('.boost-pfs-filter-option-item').each(function () {
                  let filterText = jQ(this).find('.boost-pfs-filter-option-value').text().trim();
                  if (filterText) {
                      // Convert text to a safe class name (lowercase, replace spaces with dashes)
                      let className = 'boost-filter-option-' + filterText.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');
                      jQ(this).addClass(className);
                  }
              });
          });

          let langPrefix = ""+lang_prefix_link[lang_index]+"/";
          document.querySelectorAll('.boost-pfs-filter-option.boost-pfs-filter-option-produkte .boost-pfs-filter-option-item-list .boost-pfs-filter-option-item .boost-pfs-filter-button[href]')
          .forEach(element => {
              let originalHref = element.getAttribute('href');                            
              if (!originalHref.startsWith(langPrefix)) {                  
                  let replaceHref = lang_prefix_link[lang_index] + originalHref;
                  element.setAttribute('href', replaceHref);
              }
          });

                    
          jQ(document).on('click', '.boost-pfs-filter-option.boost-pfs-filter-option-produkte .boost-pfs-filter-option-item-list .boost-pfs-filter-option-item .boost-pfs-filter-button[href]', function(event) {
              let baseUrl = window.location.pathname;
              let fullUrl = window.location.href;
              let replaceHref = $(this).attr("href");
              let newURL = fullUrl.replace(baseUrl, replaceHref);              
              history.pushState(null, "", newURL);
          });
          
          jQ(document).on('click', '.boost-pfs-filter-option.boost-pfs-filter-option-anwendungsbereich .boost-pfs-filter-option-item-list .boost-pfs-filter-option-item', function(event) {
             setTimeout(function () {       
               let baseUrl = window.location.pathname;
               let fullUrl = window.location.href;              
               if(!baseUrl.startsWith(langPrefix)){                    
                    let replaceHref = lang_prefix_link[lang_index] + baseUrl;
                    let newURL = fullUrl.replace(baseUrl, replaceHref);                    
                    window.location.href = newURL;                    
                }
              }, 1000);
          });

          // Produkte Filter
          jQ('.boost-pfs-filter-option-produkte .boost-pfs-filter-option-title-text').contents().filter(function () {
              return this.nodeType === 3; // Select only the text node
          }).first().replaceWith(Produkte[lang_index]);
          jQ(".boost-pfs-filter-option-item.boost-filter-option-sonnenschutzfolien .boost-pfs-filter-option-value").text(Sonnenschutzfolien[lang_index]);
          jQ(".boost-pfs-filter-option-item.boost-filter-option-isolationsfolien .boost-pfs-filter-option-value").text(Isolationsfolien[lang_index]);
          jQ(".boost-pfs-filter-option-item.boost-filter-option-sicherheitsfolien .boost-pfs-filter-option-value").text(Sicherheitsfolien[lang_index]);
          jQ(".boost-pfs-filter-option-item.boost-filter-option-vogelschutzfolien .boost-pfs-filter-option-value").text(Vogelschutzfolien[lang_index]);
          jQ(".boost-pfs-filter-option-item.boost-filter-option-designfolien .boost-pfs-filter-option-value").text(Designfolien[lang_index]);
          
          // Anwendungsbereich Filter
          jQ('.boost-pfs-filter-option-anwendungsbereich .boost-pfs-filter-option-title-text').contents().filter(function () {
              return this.nodeType === 3;
          }).first().replaceWith(Anwendungsbereich[lang_index]);
          jQ(".boost-pfs-filter-option-item.boost-filter-option-aussenfolien .boost-pfs-filter-option-value").text(Aussenfolien[lang_index]);
          jQ(".boost-pfs-filter-option-item.boost-filter-option-innenfolien .boost-pfs-filter-option-value").text(Innenfolien[lang_index]); 

          jQ('.refine-by-item.boost-pfs-filter-option-label').each(function () {
            let categoryText = jQ(this).find('.refine-by-type span:first-child').text().trim(); // Get current category text
            let strongText = jQ(this).find('.refine-by-type strong').text().trim(); // Get current strong text
    
            // Conditional replacement for "Anwendungsbereich"
            if (categoryText === 'Anwendungsbereich:') {
                $(this).find('.refine-by-type span:first-child').text(''+Anwendungsbereich[lang_index]+': ');
            }
    
            // Conditional replacement for "Innenfolien" or "Aussenfolien"
            if (strongText === 'Innenfolien') {
                $(this).find('.refine-by-type strong').text(Innenfolien[lang_index]);
            } else if (strongText === 'Aussenfolien') {
                $(this).find('.refine-by-type strong').text(Aussenfolien[lang_index]);
            } 
         });
          
        
        }, 1);
	};
})();
setTimeout(function(){
  if($('.c_exit').length > 0){
   $('.boost-pfs-filter-top-sorting-select option:eq(2)').prop('selected', true);
$('.boost-pfs-filter-top-sorting-select').trigger('click');
  }else{
    $('.boost-pfs-filter-top-sorting-select option:eq(2)').hide();
    $('.boost-pfs-filter-top-sorting-select option:eq(3)').hide();
  }
  }, 1500);
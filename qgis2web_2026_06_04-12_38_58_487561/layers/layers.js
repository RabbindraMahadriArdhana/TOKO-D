var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_building_1 = new ol.format.GeoJSON();
var features_building_1 = format_building_1.readFeatures(json_building_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_1.addFeatures(features_building_1);
var lyr_building_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_1, 
                style: style_building_1,
                popuplayertitle: 'building',
                interactive: true,
                title: '<img src="styles/legend/building_1.png" /> building'
            });
var format_Bangunan_2 = new ol.format.GeoJSON();
var features_Bangunan_2 = format_Bangunan_2.readFeatures(json_Bangunan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_2.addFeatures(features_Bangunan_2);
var lyr_Bangunan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_2, 
                style: style_Bangunan_2,
                popuplayertitle: 'Bangunan',
                interactive: true,
                title: '<img src="styles/legend/Bangunan_2.png" /> Bangunan'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_building_1.setVisible(true);lyr_Bangunan_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_building_1,lyr_Bangunan_2];
lyr_building_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', });
lyr_Bangunan_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'school_typ': 'school_typ', 'parking': 'parking', 'rating': 'rating', 'substation': 'substation', 'power': 'power', 'operator': 'operator', 'layer': 'layer', 'healthcare': 'healthcare', 'office': 'office', 'admin_leve': 'admin_leve', 'name_etymo': 'name_etymo', 'name_ety_1': 'name_ety_1', 'name_en': 'name_en', 'sport': 'sport', 'leisure': 'leisure', 'website': 'website', 'internet_a': 'internet_a', 'check_date': 'check_date', 'smoking': 'smoking', 'opening_ho': 'opening_ho', 'internet_1': 'internet_1', 'cuisine': 'cuisine', 'wheelchair': 'wheelchair', 'height': 'height', 'descriptio': 'descriptio', 'addr_stree': 'addr_stree', 'religion': 'religion', 'amenity': 'amenity', 'addr_city': 'addr_city', 'operator_t': 'operator_t', 'nohousenum': 'nohousenum', 'name': 'name', 'type': 'type', 'capacity_p': 'capacity_p', 'building_s': 'building_s', 'building_r': 'building_r', 'building_m': 'building_m', 'building_l': 'building_l', 'building_f': 'building_f', 'building_c': 'building_c', 'backup_gen': 'backup_gen', 'addr_full': 'addr_full', 'access_roo': 'access_roo', });
lyr_building_1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', });
lyr_Bangunan_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'school_typ': '', 'parking': '', 'rating': '', 'substation': '', 'power': '', 'operator': '', 'layer': '', 'healthcare': '', 'office': '', 'admin_leve': '', 'name_etymo': '', 'name_ety_1': '', 'name_en': '', 'sport': '', 'leisure': '', 'website': '', 'internet_a': '', 'check_date': '', 'smoking': '', 'opening_ho': '', 'internet_1': '', 'cuisine': '', 'wheelchair': '', 'height': '', 'descriptio': '', 'addr_stree': '', 'religion': '', 'amenity': '', 'addr_city': '', 'operator_t': '', 'nohousenum': '', 'name': '', 'type': '', 'capacity_p': '', 'building_s': '', 'building_r': '', 'building_m': '', 'building_l': '', 'building_f': '', 'building_c': '', 'backup_gen': '', 'addr_full': '', 'access_roo': '', });
lyr_building_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', });
lyr_Bangunan_2.set('fieldLabels', {'full_id': 'header label - visible with data', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'building': 'header label - visible with data', 'school_typ': 'hidden field', 'parking': 'hidden field', 'rating': 'hidden field', 'substation': 'hidden field', 'power': 'hidden field', 'operator': 'hidden field', 'layer': 'hidden field', 'healthcare': 'hidden field', 'office': 'hidden field', 'admin_leve': 'hidden field', 'name_etymo': 'hidden field', 'name_ety_1': 'hidden field', 'name_en': 'hidden field', 'sport': 'hidden field', 'leisure': 'hidden field', 'website': 'hidden field', 'internet_a': 'hidden field', 'check_date': 'hidden field', 'smoking': 'hidden field', 'opening_ho': 'hidden field', 'internet_1': 'hidden field', 'cuisine': 'hidden field', 'wheelchair': 'hidden field', 'height': 'hidden field', 'descriptio': 'hidden field', 'addr_stree': 'hidden field', 'religion': 'hidden field', 'amenity': 'hidden field', 'addr_city': 'hidden field', 'operator_t': 'hidden field', 'nohousenum': 'hidden field', 'name': 'hidden field', 'type': 'hidden field', 'capacity_p': 'hidden field', 'building_s': 'hidden field', 'building_r': 'hidden field', 'building_m': 'hidden field', 'building_l': 'hidden field', 'building_f': 'hidden field', 'building_c': 'hidden field', 'backup_gen': 'hidden field', 'addr_full': 'hidden field', 'access_roo': 'hidden field', });
lyr_Bangunan_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
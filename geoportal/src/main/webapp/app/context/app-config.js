define([],function(){var obj={
// .......................................................................................

  system: {
    searchLimit: 10000
  },

  edit: {
    setField: {
      allow: false,
      adminOnly: false
    }
  },

  bulkEdit: {
    allowByOwner: true,
    allowBySourceUri: true,
    allowByTaskRef: true,
    allowByQuery: true
  },

  search: {
    allowSettings: true,
    useSimpleQueryString: false,
    escapeFilter: false
  },

  searchMap: {
    basemap: "streets",
    basemapUrl: "",
    isTiled: false,
    autoResize: true,
    wrapAround180: true,
    center: [-98, 40],
    zoom: 3
  },

  searchResults: {
    numPerPage: 10,
    showDate: true,
    showOwner: true,
    showThumbnails: true,
    showFootprint: true,
    showAccess: true,
    showApprovalStatus: true,
    defaultSort: "\"title\": {\"order\" : \"asc\" , \"ignore_unmapped\" : true}",   
    sortDesc:"\"title\": {\"order\" : \"desc\" , \"ignore_unmapped\" : true}",
    showLinks: true,
    showCustomLinks: true,
    showOpenSearchLinks: true,
    showTotalCountInHierarchy: true,
    showShoppingCart: false
  },

  statusChecker: {
    apiUrl: "http://registry.fgdc.gov/statuschecker/api/v2/results?",
    infoUrl: "http://registry.fgdc.gov/statuschecker/ServiceDetail.php?",
    authKey: null
  }

// .......................................................................................
};return obj;});
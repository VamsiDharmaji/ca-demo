import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

//College model 
export interface College {
  alternateSearchName: string;
  city: string;
  country: string;
  memberId: number;
  memberName: string;
  memberTypeDescription: string;
  webSite: string;
}


const colleges: Array<College> = [
  {
    "alternateSearchName": "",
    "city": "Garden City",
    "country": "USA",
    "memberId": 11,
    "memberName": "Adelphi University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.adelphi.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Decatur",
    "country": "USA",
    "memberId": 12,
    "memberName": "Agnes Scott College",
    "memberTypeDescription": "Women",
    "webSite": "https://www.agnesscott.edu/admission/"
  },
  {
    "alternateSearchName": "College of Idaho, C of I, Albertson College of Idaho, ACI, The College of Idaho",
    "city": "Caldwell",
    "country": "USA",
    "memberId": 13,
    "memberName": "The College of Idaho",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.collegeofidaho.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Albion",
    "country": "USA",
    "memberId": 14,
    "memberName": "Albion College",
    "memberTypeDescription": "Coed",
    "webSite": "http://albion.edu/admission"
  },
  {
    "alternateSearchName": "",
    "city": "Reading",
    "country": "USA",
    "memberId": 15,
    "memberName": "Albright College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.albright.edu/"
  },
  {
    "alternateSearchName": "NYS School of Ceramics",
    "city": "Alfred",
    "country": "USA",
    "memberId": 16,
    "memberName": "Alfred University",
    "memberTypeDescription": "Coed",
    "webSite": "http://alfred.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Meadville",
    "country": "USA",
    "memberId": 17,
    "memberName": "Allegheny College",
    "memberTypeDescription": "Coed",
    "webSite": "http://sites.allegheny.edu/admissions/"
  },
  {
    "alternateSearchName": "AU",
    "city": "Washington",
    "country": "USA",
    "memberId": 18,
    "memberName": "American University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.american.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Amherst",
    "country": "USA",
    "memberId": 19,
    "memberName": "Amherst College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.amherst.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Glenside",
    "country": "USA",
    "memberId": 21,
    "memberName": "Arcadia University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.arcadia.edu/"
  },
  {
    "alternateSearchName": "Assumption College",
    "city": "Worcester",
    "country": "USA",
    "memberId": 22,
    "memberName": "Assumption University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.assumption.edu/"
  },
  {
    "alternateSearchName": "COA",
    "city": "Bar Harbor",
    "country": "USA",
    "memberId": 23,
    "memberName": "College of the Atlantic",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.coa.edu"
  },
  {
    "alternateSearchName": "AC",
    "city": "Sherman",
    "country": "USA",
    "memberId": 24,
    "memberName": "Austin College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.austincollege.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Babson Park",
    "country": "USA",
    "memberId": 25,
    "memberName": "Babson College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.babson.edu/"
  },
  {
    "alternateSearchName": "BW, BWU, Baldwin-Wallace University, Baldwin-Wallace College",
    "city": "Berea",
    "country": "USA",
    "memberId": 26,
    "memberName": "Baldwin Wallace University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.bw.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Annandale on Hudson",
    "country": "USA",
    "memberId": 27,
    "memberName": "Bard College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.bard.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "New York",
    "country": "USA",
    "memberId": 28,
    "memberName": "Barnard College",
    "memberTypeDescription": "Women",
    "webSite": "https://barnard.edu/"
  },
  {
    "alternateSearchName": "Bates",
    "city": "Lewiston",
    "country": "USA",
    "memberId": 29,
    "memberName": "Bates College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.bates.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Nashville",
    "country": "USA",
    "memberId": 30,
    "memberName": "Belmont University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.belmont.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Beloit",
    "country": "USA",
    "memberId": 31,
    "memberName": "Beloit College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.beloit.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Bennington",
    "country": "USA",
    "memberId": 32,
    "memberName": "Bennington College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.bennington.edu/admissions/apply"
  },
  {
    "alternateSearchName": "Bentley College",
    "city": "Waltham",
    "country": "USA",
    "memberId": 33,
    "memberName": "Bentley University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.bentley.edu/undergraduate"
  },
  {
    "alternateSearchName": "SUNY Binghamton, Binghamton University",
    "city": "Binghamton",
    "country": "USA",
    "memberId": 35,
    "memberName": "SUNY Binghamton University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.binghamton.edu/admissions/undergraduate/"
  },
  {
    "alternateSearchName": "BC",
    "city": "Chestnut Hill",
    "country": "USA",
    "memberId": 37,
    "memberName": "Boston College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.bc.edu/admission"
  },
  {
    "alternateSearchName": "BU",
    "city": "Boston",
    "country": "USA",
    "memberId": 38,
    "memberName": "Boston University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.bu.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Brunswick",
    "country": "USA",
    "memberId": 39,
    "memberName": "Bowdoin College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.bowdoin.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Peoria",
    "country": "USA",
    "memberId": 40,
    "memberName": "Bradley University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.bradley.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Waltham",
    "country": "USA",
    "memberId": 41,
    "memberName": "Brandeis University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.brandeis.edu/admissions/"
  },
  {
    "alternateSearchName": "Bryant",
    "city": "Smithfield",
    "country": "USA",
    "memberId": 42,
    "memberName": "Bryant University",
    "memberTypeDescription": "Coed",
    "webSite": "https://bryant.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Bryn Mawr",
    "country": "USA",
    "memberId": 43,
    "memberName": "Bryn Mawr College",
    "memberTypeDescription": "Women",
    "webSite": "https://www.brynmawr.edu/admissions/"
  },
  {
    "alternateSearchName": "",
    "city": "Lewisburg",
    "country": "USA",
    "memberId": 44,
    "memberName": "Bucknell University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.bucknell.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Indianapolis",
    "country": "USA",
    "memberId": 46,
    "memberName": "Butler University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.butler.edu/admission"
  },
  {
    "alternateSearchName": "CLU, Cal Lutheran, Cal Lu",
    "city": "Thousand Oaks",
    "country": "USA",
    "memberId": 47,
    "memberName": "California Lutheran University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.callutheran.edu/"
  },
  {
    "alternateSearchName": "Caltech, Cal tech, California tech, Tech California, CIT",
    "city": "Pasadena",
    "country": "USA",
    "memberId": 48,
    "memberName": "California Institute of Technology (Caltech)",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.caltech.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Northfield",
    "country": "USA",
    "memberId": 49,
    "memberName": "Carleton College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.carleton.edu"
  },
  {
    "alternateSearchName": "CMU",
    "city": "Pittsburgh",
    "country": "USA",
    "memberId": 50,
    "memberName": "Carnegie Mellon University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.cmu.edu/"
  },
  {
    "alternateSearchName": "Case Western, Case, CWRU",
    "city": "Cleveland",
    "country": "USA",
    "memberId": 52,
    "memberName": "Case Western Reserve University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.case.edu/admission/"
  },
  {
    "alternateSearchName": "CUA, Catholic University of America, Catholic",
    "city": "Washington",
    "country": "USA",
    "memberId": 53,
    "memberName": "The Catholic University of America",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.catholic.edu"
  },
  {
    "alternateSearchName": "Centenary College",
    "city": "Shreveport",
    "country": "USA",
    "memberId": 55,
    "memberName": "Centenary College of Louisiana",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.centenary.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Danville",
    "country": "USA",
    "memberId": 56,
    "memberName": "Centre College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.centre.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Burlington",
    "country": "USA",
    "memberId": 57,
    "memberName": "Champlain College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.champlain.edu/apply"
  },
  {
    "alternateSearchName": "",
    "city": "Pittsburgh",
    "country": "USA",
    "memberId": 58,
    "memberName": "Chatham University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.chatham.edu/"
  },
  {
    "alternateSearchName": "CMC",
    "city": "Claremont",
    "country": "USA",
    "memberId": 59,
    "memberName": "Claremont McKenna College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.cmc.edu/admission"
  },
  {
    "alternateSearchName": "",
    "city": "Worcester",
    "country": "USA",
    "memberId": 60,
    "memberName": "Clark University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.clarku.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Potsdam",
    "country": "USA",
    "memberId": 61,
    "memberName": "Clarkson University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.clarkson.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Cedar Rapids",
    "country": "USA",
    "memberId": 62,
    "memberName": "Coe College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.coe.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Waterville",
    "country": "USA",
    "memberId": 63,
    "memberName": "Colby College",
    "memberTypeDescription": "Coed",
    "webSite": "https://afa.colby.edu/"
  },
  {
    "alternateSearchName": "Colby Sawyer",
    "city": "New London",
    "country": "USA",
    "memberId": 64,
    "memberName": "Colby-Sawyer College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.colby-sawyer.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Hamilton",
    "country": "USA",
    "memberId": 65,
    "memberName": "Colgate University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.colgate.edu/admission-financial-aid"
  },
  {
    "alternateSearchName": "CC",
    "city": "Colorado Springs",
    "country": "USA",
    "memberId": 66,
    "memberName": "Colorado College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.coloradocollege.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "New London",
    "country": "USA",
    "memberId": 68,
    "memberName": "Connecticut College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.conncoll.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Spartanburg",
    "country": "USA",
    "memberId": 69,
    "memberName": "Converse University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.converse.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Mount Vernon",
    "country": "USA",
    "memberId": 70,
    "memberName": "Cornell College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.cornellcollege.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Ithaca",
    "country": "USA",
    "memberId": 71,
    "memberName": "Cornell University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.cornell.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Omaha",
    "country": "USA",
    "memberId": 72,
    "memberName": "Creighton University",
    "memberTypeDescription": "Coed",
    "webSite": "http://admissions.creighton.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Irving",
    "country": "USA",
    "memberId": 73,
    "memberName": "University of Dallas",
    "memberTypeDescription": "Coed",
    "webSite": "https://udallas.edu"
  },
  {
    "alternateSearchName": "Dartmouth",
    "city": "Hanover",
    "country": "USA",
    "memberId": 74,
    "memberName": "Dartmouth College",
    "memberTypeDescription": "Coed",
    "webSite": "https://admissions.dartmouth.edu/"
  },
  {
    "alternateSearchName": "DC",
    "city": "Davidson",
    "country": "USA",
    "memberId": 75,
    "memberName": "Davidson College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.davidson.edu"
  },
  {
    "alternateSearchName": "UD, U Del, udel, The University of Delaware",
    "city": "Newark",
    "country": "USA",
    "memberId": 76,
    "memberName": "University of Delaware",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.udel.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Granville",
    "country": "USA",
    "memberId": 77,
    "memberName": "Denison University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.denison.edu"
  },
  {
    "alternateSearchName": "DU, UD, Denver University, University of Denver",
    "city": "Denver",
    "country": "USA",
    "memberId": 78,
    "memberName": "University of Denver",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.du.edu/admission"
  },
  {
    "alternateSearchName": "",
    "city": "Greencastle",
    "country": "USA",
    "memberId": 79,
    "memberName": "DePauw University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.depauw.edu"
  },
  {
    "alternateSearchName": "Dickinson",
    "city": "Carlisle",
    "country": "USA",
    "memberId": 80,
    "memberName": "Dickinson College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.dickinson.edu/"
  },
  {
    "alternateSearchName": "Dominican, DUC",
    "city": "San Rafael",
    "country": "USA",
    "memberId": 82,
    "memberName": "Dominican University of California",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.dominican.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Madison",
    "country": "USA",
    "memberId": 83,
    "memberName": "Drew University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.drew.edu"
  },
  {
    "alternateSearchName": "Drexel, Drexel U, Drexel Univ.",
    "city": "Philadelphia",
    "country": "USA",
    "memberId": 84,
    "memberName": "Drexel University",
    "memberTypeDescription": "Coed",
    "webSite": "http://drexel.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Durham",
    "country": "USA",
    "memberId": 85,
    "memberName": "Duke University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.admissions.duke.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Richmond",
    "country": "USA",
    "memberId": 86,
    "memberName": "Earlham College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.earlham.edu"
  },
  {
    "alternateSearchName": "",
    "city": "St Petersburg",
    "country": "USA",
    "memberId": 87,
    "memberName": "Eckerd College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.eckerd.edu/"
  },
  {
    "alternateSearchName": "Etown, E-town, Etown College, Elizabethtown, E-town College",
    "city": "Elizabethtown",
    "country": "USA",
    "memberId": 88,
    "memberName": "Elizabethtown College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.etown.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Elmira",
    "country": "USA",
    "memberId": 89,
    "memberName": "Elmira College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.elmira.edu"
  },
  {
    "alternateSearchName": "Emmanuel College , Emmanuel",
    "city": "Boston",
    "country": "USA",
    "memberId": 91,
    "memberName": "Emmanuel College (MA)",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.emmanuel.edu"
  },
  {
    "alternateSearchName": "Emory College, Oxford College",
    "city": "Atlanta",
    "country": "USA",
    "memberId": 92,
    "memberName": "Emory University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.emory.edu"
  },
  {
    "alternateSearchName": "Mannes School of Music, School of Drama, School of Jazz and Contemporary Music, Eugene Lang College of Liberal Arts, Parsons School of Design, Parsons Paris, Parsons Paris France, Parsons France, New School France, College of Performing Arts, Eugene Lang, Lang, Mannes, Parsons..",
    "city": "New York",
    "country": "USA",
    "memberId": 93,
    "memberName": "The New School",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.newschool.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Fairfield",
    "country": "USA",
    "memberId": 94,
    "memberName": "Fairfield University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.fairfield.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Findlay",
    "country": "USA",
    "memberId": 95,
    "memberName": "The University of Findlay",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.findlay.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Nashville",
    "country": "USA",
    "memberId": 96,
    "memberName": "Fisk University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.fisk.edu"
  },
  {
    "alternateSearchName": "FSC, Florida Southern, Southern, Florida",
    "city": "Lakeland",
    "country": "USA",
    "memberId": 97,
    "memberName": "Florida Southern College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.flsouthern.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Bronx",
    "country": "USA",
    "memberId": 98,
    "memberName": "Fordham University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.fordham.edu"
  },
  {
    "alternateSearchName": "F&M, Franklin & Marshall, Franklin & Marshall College, Franklin and Marshall, Franklin and Marshall College",
    "city": "Lancaster",
    "country": "USA",
    "memberId": 99,
    "memberName": "Franklin & Marshall College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.fandm.edu/admission"
  },
  {
    "alternateSearchName": "",
    "city": "Greenville",
    "country": "USA",
    "memberId": 100,
    "memberName": "Furman University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.furman.edu/admissions-aid/"
  },
  {
    "alternateSearchName": "",
    "city": "Geneseo",
    "country": "USA",
    "memberId": 101,
    "memberName": "SUNY College at Geneseo",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.geneseo.edu"
  },
  {
    "alternateSearchName": "GFU",
    "city": "Newberg",
    "country": "USA",
    "memberId": 102,
    "memberName": "George Fox University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.georgefox.edu/college-admissions/index.html"
  },
  {
    "alternateSearchName": "GWU, GW, The George Washington University, George Washington University",
    "city": "Washington",
    "country": "USA",
    "memberId": 103,
    "memberName": "The George Washington University",
    "memberTypeDescription": "Coed",
    "webSite": "https://undergraduate.admissions.gwu.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Gettysburg",
    "country": "USA",
    "memberId": 104,
    "memberName": "Gettysburg College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.gettysburg.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Spokane",
    "country": "USA",
    "memberId": 105,
    "memberName": "Gonzaga University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.gonzaga.edu/"
  },
  {
    "alternateSearchName": "GC",
    "city": "Baltimore",
    "country": "USA",
    "memberId": 106,
    "memberName": "Goucher College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.goucher.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Grinnell",
    "country": "USA",
    "memberId": 108,
    "memberName": "Grinnell College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.grinnell.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Greensboro",
    "country": "USA",
    "memberId": 109,
    "memberName": "Guilford College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.guilford.edu/"
  },
  {
    "alternateSearchName": "GAC",
    "city": "Saint Peter",
    "country": "USA",
    "memberId": 110,
    "memberName": "Gustavus Adolphus College",
    "memberTypeDescription": "Coed",
    "webSite": "http://gustavus.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Clinton",
    "country": "USA",
    "memberId": 111,
    "memberName": "Hamilton College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.hamilton.edu/admission"
  },
  {
    "alternateSearchName": "Hampden Hampden Syndey Hamden",
    "city": "Hampden-Sydney",
    "country": "USA",
    "memberId": 112,
    "memberName": "Hampden-Sydney College",
    "memberTypeDescription": "Men",
    "webSite": "http://www.hsc.edu/"
  },
  {
    "alternateSearchName": "Hampshire, HC, Hamp",
    "city": "Amherst",
    "country": "USA",
    "memberId": 113,
    "memberName": "Hampshire College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.hampshire.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Hanover",
    "country": "USA",
    "memberId": 114,
    "memberName": "Hanover College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.hanover.edu"
  },
  {
    "alternateSearchName": "Wick",
    "city": "Oneonta",
    "country": "USA",
    "memberId": 115,
    "memberName": "Hartwick College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.hartwick.edu/admissions"
  },
  {
    "alternateSearchName": "Harvard College",
    "city": "Cambridge",
    "country": "USA",
    "memberId": 116,
    "memberName": "Harvard University",
    "memberTypeDescription": "Coed",
    "webSite": "https://college.harvard.edu/admissions"
  },
  {
    "alternateSearchName": "HMC, Mudd",
    "city": "Claremont",
    "country": "USA",
    "memberId": 117,
    "memberName": "Harvey Mudd College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.hmc.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Haverford",
    "country": "USA",
    "memberId": 118,
    "memberName": "Haverford College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.haverford.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Conway",
    "country": "USA",
    "memberId": 119,
    "memberName": "Hendrix College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.hendrix.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Hillsdale",
    "country": "USA",
    "memberId": 120,
    "memberName": "Hillsdale College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.hillsdale.edu/information-for/undergraduate-admissions/"
  },
  {
    "alternateSearchName": "",
    "city": "Hiram",
    "country": "USA",
    "memberId": 121,
    "memberName": "Hiram College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.hiram.edu/"
  },
  {
    "alternateSearchName": "HWS, hws, Hobart, William Smith, HO, WS",
    "city": "Geneva",
    "country": "USA",
    "memberId": 122,
    "memberName": "Hobart and William Smith Colleges",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.hws.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Hempstead",
    "country": "USA",
    "memberId": 123,
    "memberName": "Hofstra University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.hofstra.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Roanoke",
    "country": "USA",
    "memberId": 124,
    "memberName": "Hollins University",
    "memberTypeDescription": "Women",
    "webSite": "http://www.hollins.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Worcester",
    "country": "USA",
    "memberId": 125,
    "memberName": "College of the Holy Cross",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.holycross.edu/"
  },
  {
    "alternateSearchName": "IWU",
    "city": "Bloomington",
    "country": "USA",
    "memberId": 126,
    "memberName": "Illinois Wesleyan University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.iwu.edu/"
  },
  {
    "alternateSearchName": "ionau, ionauniv, ionauniversity, ionacollege, ionac, iona, iona college, iona university, Iona, Iona University, Iona College",
    "city": "New Rochelle",
    "country": "USA",
    "memberId": 127,
    "memberName": "Iona University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.iona.edu/"
  },
  {
    "alternateSearchName": "Ithica, IC",
    "city": "Ithaca",
    "country": "USA",
    "memberId": 128,
    "memberName": "Ithaca College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.ithaca.edu"
  },
  {
    "alternateSearchName": "JCU, John Carroll",
    "city": "University Heights",
    "country": "USA",
    "memberId": 129,
    "memberName": "John Carroll University",
    "memberTypeDescription": "Coed",
    "webSite": "https://jcu.edu/applynow"
  },
  {
    "alternateSearchName": "JHU, John's Hopkins, John Hopkins",
    "city": "Baltimore",
    "country": "USA",
    "memberId": 130,
    "memberName": "Johns Hopkins University",
    "memberTypeDescription": "Coed",
    "webSite": "https://apply.jhu.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Huntingdon",
    "country": "USA",
    "memberId": 131,
    "memberName": "Juniata College",
    "memberTypeDescription": "Coed",
    "webSite": "https://think.juniata.edu/stories/index.php"
  },
  {
    "alternateSearchName": "kzoo",
    "city": "Kalamazoo",
    "country": "USA",
    "memberId": 132,
    "memberName": "Kalamazoo College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.kzoo.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Gambier",
    "country": "USA",
    "memberId": 133,
    "memberName": "Kenyon College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.kenyon.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Galesburg",
    "country": "USA",
    "memberId": 134,
    "memberName": "Knox College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.knox.edu/"
  },
  {
    "alternateSearchName": "LaSalle, Lasalle, LaSalle University, Lasalle University, La Salle University",
    "city": "Philadelphia",
    "country": "USA",
    "memberId": 136,
    "memberName": "La Salle University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.lasalle.edu"
  },
  {
    "alternateSearchName": "university of laverne",
    "city": "La Verne",
    "country": "USA",
    "memberId": 137,
    "memberName": "University of La Verne",
    "memberTypeDescription": "Coed",
    "webSite": "https://laverne.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Easton",
    "country": "USA",
    "memberId": 138,
    "memberName": "Lafayette College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.lafayette.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Lake Forest",
    "country": "USA",
    "memberId": 139,
    "memberName": "Lake Forest College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.lakeforest.edu/apply"
  },
  {
    "alternateSearchName": "Lawrence Tech or LTU",
    "city": "Southfield",
    "country": "USA",
    "memberId": 140,
    "memberName": "Lawrence Technological University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.ltu.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Appleton",
    "country": "USA",
    "memberId": 141,
    "memberName": "Lawrence University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.lawrence.edu/"
  },
  {
    "alternateSearchName": "LeMoyne",
    "city": "Syracuse",
    "country": "USA",
    "memberId": 142,
    "memberName": "Le Moyne College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.lemoyne.edu/"
  },
  {
    "alternateSearchName": "Lehigh",
    "city": "Bethlehem",
    "country": "USA",
    "memberId": 143,
    "memberName": "Lehigh University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www1.lehigh.edu"
  },
  {
    "alternateSearchName": "Art Institute of Boston",
    "city": "Cambridge",
    "country": "USA",
    "memberId": 144,
    "memberName": "Lesley University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.lesley.edu"
  },
  {
    "alternateSearchName": "Lewis and Clark College, Lewis & Clark College",
    "city": "Portland",
    "country": "USA",
    "memberId": 145,
    "memberName": "Lewis & Clark College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.lclark.edu"
  },
  {
    "alternateSearchName": "Linfield College",
    "city": "McMinnville",
    "country": "USA",
    "memberId": 146,
    "memberName": "Linfield University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.linfield.edu"
  },
  {
    "alternateSearchName": "Loyola Maryland",
    "city": "Baltimore",
    "country": "USA",
    "memberId": 147,
    "memberName": "Loyola University Maryland",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.loyola.edu/admission/undergraduate"
  },
  {
    "alternateSearchName": "",
    "city": "New Orleans",
    "country": "USA",
    "memberId": 148,
    "memberName": "Loyola University New Orleans",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.loyno.edu"
  },
  {
    "alternateSearchName": "Luther Norse, Decorah",
    "city": "Decorah",
    "country": "USA",
    "memberId": 149,
    "memberName": "Luther College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.luther.edu"
  },
  {
    "alternateSearchName": "",
    "city": "St. Paul",
    "country": "USA",
    "memberId": 150,
    "memberName": "Macalester College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.macalester.edu/"
  },
  {
    "alternateSearchName": "UMaine, UMO, UM, Orono, Machias, UMM",
    "city": "Orono",
    "country": "USA",
    "memberId": 151,
    "memberName": "University of Maine",
    "memberTypeDescription": "Coed",
    "webSite": "https://umaine.edu/"
  },
  {
    "alternateSearchName": "UMF, UMaine Farmington, Farmington",
    "city": "Farmington",
    "country": "USA",
    "memberId": 152,
    "memberName": "University of Maine at Farmington",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.umf.maine.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Riverdale",
    "country": "USA",
    "memberId": 153,
    "memberName": "Manhattan College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.manhattan.edu"
  },
  {
    "alternateSearchName": "Mville,Manhattanville College",
    "city": "Purchase",
    "country": "USA",
    "memberId": 154,
    "memberName": "Manhattanville University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.mville.edu/admissions-and-aid/admissions/undergraduate-admissions.php"
  },
  {
    "alternateSearchName": "Marietta University, MC",
    "city": "Marietta",
    "country": "USA",
    "memberId": 155,
    "memberName": "Marietta College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.marietta.edu/future-students"
  },
  {
    "alternateSearchName": "",
    "city": "Poughkeepsie",
    "country": "USA",
    "memberId": 156,
    "memberName": "Marist College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.marist.edu"
  },
  {
    "alternateSearchName": "MU",
    "city": "Milwaukee",
    "country": "USA",
    "memberId": 158,
    "memberName": "Marquette University",
    "memberTypeDescription": "Coed",
    "webSite": "http://marquette.edu/explore"
  },
  {
    "alternateSearchName": "UMW, Mary Wash, Mary Washington College, Mary Washington, MWU, Fredvegas",
    "city": "Fredericksburg",
    "country": "USA",
    "memberId": 159,
    "memberName": "University of Mary Washington",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.umw.edu"
  },
  {
    "alternateSearchName": "UMass, Umass, Mass, Amherst, Massachusetts, UMA,Uma",
    "city": "Amherst",
    "country": "USA",
    "memberId": 160,
    "memberName": "University of Massachusetts Amherst",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.umass.edu/"
  },
  {
    "alternateSearchName": "MCPHS University, Massachusetts College of Pharmacy and Health Sciences, Mass College of Pharmacy and Health Sciences, MCPHS",
    "city": "Boston",
    "country": "USA",
    "memberId": 161,
    "memberName": "Massachusetts College of Pharmacy and Health Sciences",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.mcphs.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Westminster",
    "country": "USA",
    "memberId": 162,
    "memberName": "McDaniel College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.mcdaniel.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "North Andover",
    "country": "USA",
    "memberId": 163,
    "memberName": "Merrimack College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.merrimack.edu/admission/"
  },
  {
    "alternateSearchName": "miami ohio",
    "city": "Oxford",
    "country": "USA",
    "memberId": 164,
    "memberName": "Miami University (Ohio)",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.miamioh.edu/admission"
  },
  {
    "alternateSearchName": "UMiami, umiami, The U",
    "city": "Coral Gables",
    "country": "USA",
    "memberId": 165,
    "memberName": "University of Miami",
    "memberTypeDescription": "Coed",
    "webSite": "https://admissions.miami.edu"
  },
  {
    "alternateSearchName": "Midd",
    "city": "Middlebury",
    "country": "USA",
    "memberId": 166,
    "memberName": "Middlebury College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.middlebury.edu/admissions/"
  },
  {
    "alternateSearchName": "",
    "city": "Jackson",
    "country": "USA",
    "memberId": 168,
    "memberName": "Millsaps College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.millsaps.edu"
  },
  {
    "alternateSearchName": "MoCo, Moravian University, Morvian, Moravain",
    "city": "Bethlehem",
    "country": "USA",
    "memberId": 169,
    "memberName": "Moravian University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.moravian.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Atlanta",
    "country": "USA",
    "memberId": 170,
    "memberName": "Morehouse College",
    "memberTypeDescription": "Men",
    "webSite": "http://www.morehouse.edu"
  },
  {
    "alternateSearchName": "MHC",
    "city": "South Hadley",
    "country": "USA",
    "memberId": 171,
    "memberName": "Mount Holyoke College",
    "memberTypeDescription": "Women",
    "webSite": "http://www.mtholyoke.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Riverdale",
    "country": "USA",
    "memberId": 172,
    "memberName": "College of Mount Saint Vincent",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.mountsaintvincent.edu"
  },
  {
    "alternateSearchName": "Muhlenberg",
    "city": "Allentown",
    "country": "USA",
    "memberId": 173,
    "memberName": "Muhlenberg College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.muhlenberg.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Boulder",
    "country": "USA",
    "memberId": 174,
    "memberName": "Naropa University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.naropa.edu/"
  },
  {
    "alternateSearchName": "Nazareth, Nazareth University, Nazareth College",
    "city": "Rochester",
    "country": "USA",
    "memberId": 175,
    "memberName": "Nazareth University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www2.naz.edu/admissions"
  },
  {
    "alternateSearchName": "NCF",
    "city": "Sarasota",
    "country": "USA",
    "memberId": 176,
    "memberName": "New College of Florida",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.ncf.edu"
  },
  {
    "alternateSearchName": "New Hampshire Institute of Art, NHIA, NEC",
    "city": "Henniker",
    "country": "USA",
    "memberId": 177,
    "memberName": "New England College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.nec.edu"
  },
  {
    "alternateSearchName": "unh",
    "city": "Durham",
    "country": "USA",
    "memberId": 178,
    "memberName": "University of New Hampshire",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.unh.edu/main/admissions"
  },
  {
    "alternateSearchName": "TCNJ, College of New Jersey",
    "city": "Ewing",
    "country": "USA",
    "memberId": 179,
    "memberName": "The College of New Jersey",
    "memberTypeDescription": "Coed",
    "webSite": "http://tcnj.edu"
  },
  {
    "alternateSearchName": "Polytechnic Institute, NYU Poly, NYU",
    "city": "New York",
    "country": "USA",
    "memberId": 180,
    "memberName": "New York University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.nyu.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Dudley",
    "country": "USA",
    "memberId": 181,
    "memberName": "Nichols College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.nichols.edu"
  },
  {
    "alternateSearchName": "NU, NEU",
    "city": "Boston",
    "country": "USA",
    "memberId": 182,
    "memberName": "Northeastern University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.northeastern.edu/admissions/"
  },
  {
    "alternateSearchName": "",
    "city": "Ashland",
    "country": "USA",
    "memberId": 183,
    "memberName": "Northland College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.northland.edu/"
  },
  {
    "alternateSearchName": "NU, NW",
    "city": "Evanston",
    "country": "USA",
    "memberId": 184,
    "memberName": "Northwestern University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.northwestern.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Baltimore",
    "country": "USA",
    "memberId": 186,
    "memberName": "Notre Dame of Maryland University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.ndm.edu"
  },
  {
    "alternateSearchName": "Oberlin",
    "city": "Oberlin",
    "country": "USA",
    "memberId": 187,
    "memberName": "Oberlin College of Arts and Sciences",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.oberlin.edu"
  },
  {
    "alternateSearchName": "Oxy",
    "city": "Los Angeles",
    "country": "USA",
    "memberId": 188,
    "memberName": "Occidental College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.oxy.edu/admission-aid"
  },
  {
    "alternateSearchName": "OU, Oglethorpe",
    "city": "Atlanta",
    "country": "USA",
    "memberId": 189,
    "memberName": "Oglethorpe University",
    "memberTypeDescription": "Coed",
    "webSite": "http://oglethorpe.edu/admission/"
  },
  {
    "alternateSearchName": "OWU, Battling Bishops, Bishops",
    "city": "Delaware",
    "country": "USA",
    "memberId": 190,
    "memberName": "Ohio Wesleyan University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.owu.edu/"
  },
  {
    "alternateSearchName": "Pace, Pace New York City, Pace University NYC, Pace University Westchester, Pace Westchester, Pace NYC",
    "city": "New York City & Pleasantville",
    "country": "USA",
    "memberId": 191,
    "memberName": "Pace University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.pace.edu/"
  },
  {
    "alternateSearchName": "Pacific, UOP, UofthePacific, UoPacific, Pacific University",
    "city": "Stockton",
    "country": "USA",
    "memberId": 192,
    "memberName": "University of the Pacific",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.pacific.edu/admission/undergraduate"
  },
  {
    "alternateSearchName": "UPenn, Penn",
    "city": "Philadelphia",
    "country": "USA",
    "memberId": 193,
    "memberName": "University of Pennsylvania",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.upenn.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Claremont",
    "country": "USA",
    "memberId": 194,
    "memberName": "Pitzer College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.pitzer.edu/admission/"
  },
  {
    "alternateSearchName": "",
    "city": "Claremont",
    "country": "USA",
    "memberId": 195,
    "memberName": "Pomona College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.pomona.edu/"
  },
  {
    "alternateSearchName": "Portland, UP, Pilots",
    "city": "Portland",
    "country": "USA",
    "memberId": 196,
    "memberName": "University of Portland",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.up.edu/"
  },
  {
    "alternateSearchName": "PC, presby, Blue Hose",
    "city": "Clinton",
    "country": "USA",
    "memberId": 197,
    "memberName": "Presbyterian College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.presby.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Prescott",
    "country": "USA",
    "memberId": 198,
    "memberName": "Prescott College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.prescott.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Princeton",
    "country": "USA",
    "memberId": 199,
    "memberName": "Princeton University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.princeton.edu"
  },
  {
    "alternateSearchName": "PC",
    "city": "Providence",
    "country": "USA",
    "memberId": 200,
    "memberName": "Providence College",
    "memberTypeDescription": "Coed",
    "webSite": "https://admission.providence.edu/"
  },
  {
    "alternateSearchName": "UPS",
    "city": "Tacoma",
    "country": "USA",
    "memberId": 201,
    "memberName": "University of Puget Sound",
    "memberTypeDescription": "Coed",
    "webSite": "http://pugetsound.edu"
  },
  {
    "alternateSearchName": "Randolph, Macon, Randolph Macon, RMC",
    "city": "Ashland",
    "country": "USA",
    "memberId": 203,
    "memberName": "Randolph-Macon College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.rmc.edu/"
  },
  {
    "alternateSearchName": "RC, Randolph Macon Woman's College, Randolph",
    "city": "Lynchburg",
    "country": "USA",
    "memberId": 204,
    "memberName": "Randolph College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.randolphcollege.edu/"
  },
  {
    "alternateSearchName": "Univ Redlands, Univ of Redlands, Redlands University, Redlands, UoR, University of Redlands",
    "city": "Redlands",
    "country": "USA",
    "memberId": 205,
    "memberName": "University of Redlands",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.redlands.edu/admissions-and-aid/first-year/"
  },
  {
    "alternateSearchName": "",
    "city": "Portland",
    "country": "USA",
    "memberId": 206,
    "memberName": "Reed College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.reed.edu/apply/"
  },
  {
    "alternateSearchName": "",
    "city": "Weston",
    "country": "USA",
    "memberId": 207,
    "memberName": "Regis College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.regiscollege.edu/admission/undergraduate-admission"
  },
  {
    "alternateSearchName": "",
    "city": "Denver",
    "country": "USA",
    "memberId": 208,
    "memberName": "Regis University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.regis.edu/"
  },
  {
    "alternateSearchName": "RPI",
    "city": "Troy",
    "country": "USA",
    "memberId": 209,
    "memberName": "Rensselaer Polytechnic Institute",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.rpi.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Memphis",
    "country": "USA",
    "memberId": 210,
    "memberName": "Rhodes College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.rhodes.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Houston",
    "country": "USA",
    "memberId": 211,
    "memberName": "Rice University",
    "memberTypeDescription": "Coed",
    "webSite": "https://admission.rice.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Richmond",
    "country": "USA",
    "memberId": 212,
    "memberName": "University of Richmond",
    "memberTypeDescription": "Coed",
    "webSite": "https://admissions.richmond.edu/"
  },
  {
    "alternateSearchName": "Riders ryder ryders",
    "city": "Lawrenceville",
    "country": "USA",
    "memberId": 213,
    "memberName": "Rider University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.rider.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Ripon",
    "country": "USA",
    "memberId": 214,
    "memberName": "Ripon College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.ripon.edu"
  },
  {
    "alternateSearchName": "RIT",
    "city": "Rochester",
    "country": "USA",
    "memberId": 215,
    "memberName": "Rochester Institute of Technology",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.rit.edu/"
  },
  {
    "alternateSearchName": "U of R; Rochester",
    "city": "Rochester",
    "country": "USA",
    "memberId": 216,
    "memberName": "University of Rochester",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.rochester.edu/"
  },
  {
    "alternateSearchName": "RWU, Roger, Roger Williams",
    "city": "Bristol",
    "country": "USA",
    "memberId": 217,
    "memberName": "Roger Williams University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.rwu.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Winter Park",
    "country": "USA",
    "memberId": 218,
    "memberName": "Rollins College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.rollins.edu/"
  },
  {
    "alternateSearchName": "sacredheart, SHU",
    "city": "Fairfield",
    "country": "USA",
    "memberId": 219,
    "memberName": "Sacred Heart University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.sacredheart.edu/admissions--aid/undergraduate-admissions/"
  },
  {
    "alternateSearchName": "St. Anselm College",
    "city": "Manchester",
    "country": "USA",
    "memberId": 220,
    "memberName": "Saint Anselm College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.anselm.edu/"
  },
  {
    "alternateSearchName": "St. John, St. Johns, St. John's, St John, St Johns, St. John's, St John's, Saint Johns, SJU",
    "city": "Collegeville",
    "country": "USA",
    "memberId": 221,
    "memberName": "Saint John's University (MN)",
    "memberTypeDescription": "Coordinate",
    "webSite": "http://www.csbsju.edu"
  },
  {
    "alternateSearchName": "SJCME, St. Joseph's College of Maine, Saint Joseph's College of Maine",
    "city": "Standish",
    "country": "USA",
    "memberId": 222,
    "memberName": "Saint Joseph's College of Maine",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.sjcme.edu"
  },
  {
    "alternateSearchName": "saint joseph's university,saint joseph university,saint josephs university,sju,st joseph university,st joseph's university,st joe's university,st josephs university,st joes university,st. joseph university,st. joe's university,st. joseph's university, saint joseph's university in Philadelphia",
    "city": "Philadelphia",
    "country": "USA",
    "memberId": 223,
    "memberName": "Saint Joseph's University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.sju.edu/apply"
  },
  {
    "alternateSearchName": "St. Leo, St Leo University, St Leo, St Leo U",
    "city": "Saint Leo",
    "country": "USA",
    "memberId": 224,
    "memberName": "Saint Leo University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.saintleo.edu/campus"
  },
  {
    "alternateSearchName": "slu, st. louis university, saint louis university, billikens, st louis university",
    "city": "St. Louis",
    "country": "USA",
    "memberId": 225,
    "memberName": "Saint Louis University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.slu.edu"
  },
  {
    "alternateSearchName": "Saint Mary's College Indiana,Saint Mary's,St. Mary's,Notre Dame,St. Mary's College Indiana,St Mary,St Mary's, Saint Marys, St Marys, St. Marys, Mary",
    "city": "Notre Dame",
    "country": "USA",
    "memberId": 226,
    "memberName": "Saint Mary's College, Notre Dame, Indiana",
    "memberTypeDescription": "Women",
    "webSite": "https://www.saintmarys.edu"
  },
  {
    "alternateSearchName": "St Mary's, Saint Mary's, Saint Mary's College, St Mary's College",
    "city": "Moraga",
    "country": "USA",
    "memberId": 227,
    "memberName": "Saint Mary's College of California",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.stmarys-ca.edu"
  },
  {
    "alternateSearchName": "St. Michael’s College, Saint, St., Michael's, Micheal's, Michael, Micheal, Michaels, Micheals, Michael‘s, Micheal‘s, Mike's, mikes, st mikes, st",
    "city": "Colchester",
    "country": "USA",
    "memberId": 228,
    "memberName": "Saint Michael's College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.smcvt.edu/"
  },
  {
    "alternateSearchName": "St. Peter's University, St Peters University, Saint Peters University, Saint Peter's University",
    "city": "Jersey City",
    "country": "USA",
    "memberId": 229,
    "memberName": "Saint Peter's University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.saintpeters.edu/admission/"
  },
  {
    "alternateSearchName": "St. Vincent College",
    "city": "Latrobe",
    "country": "USA",
    "memberId": 230,
    "memberName": "Saint Vincent College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.stvincent.edu/"
  },
  {
    "alternateSearchName": "Winston Salem",
    "city": "Winston-Salem",
    "country": "USA",
    "memberId": 231,
    "memberName": "Salem College",
    "memberTypeDescription": "Women",
    "webSite": "https://www.salem.edu/"
  },
  {
    "alternateSearchName": "Salve Regina, SRU, Newport",
    "city": "Newport",
    "country": "USA",
    "memberId": 232,
    "memberName": "Salve Regina University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.thisissalve.com/"
  },
  {
    "alternateSearchName": "USD, San Diego University, Univ San Diego, Univ of San Diego, Torero, San Diego, SD",
    "city": "San Diego",
    "country": "USA",
    "memberId": 233,
    "memberName": "University of San Diego",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.sandiego.edu/becomeatorero"
  },
  {
    "alternateSearchName": "USF, USFCA",
    "city": "San Francisco",
    "country": "USA",
    "memberId": 234,
    "memberName": "University of San Francisco",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.usfca.edu"
  },
  {
    "alternateSearchName": "SCU, Santa Clara, Santa Clara University, University of Santa Clara",
    "city": "Santa Clara",
    "country": "USA",
    "memberId": 235,
    "memberName": "Santa Clara University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.scu.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Bronxville",
    "country": "USA",
    "memberId": 237,
    "memberName": "Sarah Lawrence College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.sarahlawrence.edu/"
  },
  {
    "alternateSearchName": "Scranton University",
    "city": "Scranton",
    "country": "USA",
    "memberId": 238,
    "memberName": "The University of Scranton",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.scranton.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Claremont",
    "country": "USA",
    "memberId": 239,
    "memberName": "Scripps College",
    "memberTypeDescription": "Women",
    "webSite": "http://www.scrippscollege.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Seattle",
    "country": "USA",
    "memberId": 240,
    "memberName": "Seattle University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.seattleu.edu"
  },
  {
    "alternateSearchName": null,
    "city": "South Orange",
    "country": "USA",
    "memberId": 241,
    "memberName": "Seton Hall University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.shu.edu/"
  },
  {
    "alternateSearchName": "Seton Hill",
    "city": "Greensburg",
    "country": "USA",
    "memberId": 242,
    "memberName": "Seton Hill University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.setonhill.edu"
  },
  {
    "alternateSearchName": "Sewanee, The University of the South",
    "city": "Sewanee",
    "country": "USA",
    "memberId": 243,
    "memberName": "Sewanee: The University of the South",
    "memberTypeDescription": "Coed",
    "webSite": "https://new.sewanee.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Loudonville",
    "country": "USA",
    "memberId": 244,
    "memberName": "Siena College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.siena.edu"
  },
  {
    "alternateSearchName": "Simmons University, Simmons College, Simmons",
    "city": "Boston",
    "country": "USA",
    "memberId": 245,
    "memberName": "Simmons University",
    "memberTypeDescription": "Women",
    "webSite": "https://www.simmons.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Saratoga Springs",
    "country": "USA",
    "memberId": 246,
    "memberName": "Skidmore College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.skidmore.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Northampton",
    "country": "USA",
    "memberId": 247,
    "memberName": "Smith College",
    "memberTypeDescription": "Women",
    "webSite": "http://www.smith.edu/admission-aid"
  },
  {
    "alternateSearchName": "USM",
    "city": "Portland",
    "country": "USA",
    "memberId": 248,
    "memberName": "University of Southern Maine",
    "memberTypeDescription": "Coed",
    "webSite": "https://usm.maine.edu"
  },
  {
    "alternateSearchName": "SMU",
    "city": "Dallas",
    "country": "USA",
    "memberId": 249,
    "memberName": "Southern Methodist University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.smu.edu/admission"
  },
  {
    "alternateSearchName": "SNHU",
    "city": "Manchester",
    "country": "USA",
    "memberId": 250,
    "memberName": "Southern New Hampshire University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.snhu.edu/student-experience/campus-experience"
  },
  {
    "alternateSearchName": "",
    "city": "Georgetown",
    "country": "USA",
    "memberId": 251,
    "memberName": "Southwestern University",
    "memberTypeDescription": "Coed",
    "webSite": "http://southwestern.edu/admission/"
  },
  {
    "alternateSearchName": "SC",
    "city": "Atlanta",
    "country": "USA",
    "memberId": 252,
    "memberName": "Spelman College",
    "memberTypeDescription": "Women",
    "webSite": "http://www.spelman.edu/admissions"
  },
  {
    "alternateSearchName": "SHC, Spring Hill,",
    "city": "Mobile",
    "country": "USA",
    "memberId": 253,
    "memberName": "Spring Hill College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.shc.edu/"
  },
  {
    "alternateSearchName": "St Lawrence, Saint Lawrence, SLU, St. Lawrence, St. Lawrence University, Canton, Canton NY, St Lawrence University, Saint Lawrence University",
    "city": "Canton",
    "country": "USA",
    "memberId": 254,
    "memberName": "St. Lawrence University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.stlawu.edu"
  },
  {
    "alternateSearchName": "St. Norbert St Norbert SNC St. Norberts St Norberts",
    "city": "DePere",
    "country": "USA",
    "memberId": 255,
    "memberName": "St. Norbert College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.snc.edu/"
  },
  {
    "alternateSearchName": "Saint Olaf, St Olaf",
    "city": "Northfield",
    "country": "USA",
    "memberId": 256,
    "memberName": "St. Olaf College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.stolaf.edu"
  },
  {
    "alternateSearchName": "",
    "city": "DeLand",
    "country": "USA",
    "memberId": 257,
    "memberName": "Stetson University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.stetson.edu/home/"
  },
  {
    "alternateSearchName": "Steven's, Stephens",
    "city": "Hoboken",
    "country": "USA",
    "memberId": 258,
    "memberName": "Stevens Institute of Technology",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.stevens.edu"
  },
  {
    "alternateSearchName": "Stonehill, Stone hill, Boston, Providence, Massachusetts, Rhode Island, New England, Worcester, Cape Cod, Holy Cross, Notre Dame, Catholic",
    "city": "Easton",
    "country": "USA",
    "memberId": 259,
    "memberName": "Stonehill College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.stonehill.edu"
  },
  {
    "alternateSearchName": "Suffolk,SU,Suff",
    "city": "Boston",
    "country": "USA",
    "memberId": 260,
    "memberName": "Suffolk University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.suffolk.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Selinsgrove",
    "country": "USA",
    "memberId": 261,
    "memberName": "Susquehanna University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.susqu.edu/admission-and-aid"
  },
  {
    "alternateSearchName": "",
    "city": "Swarthmore",
    "country": "USA",
    "memberId": 262,
    "memberName": "Swarthmore College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.swarthmore.edu/"
  },
  {
    "alternateSearchName": "SweetBriar, Vixens, Sweet, Briar",
    "city": "Sweet Briar",
    "country": "USA",
    "memberId": 263,
    "memberName": "Sweet Briar College",
    "memberTypeDescription": "Women",
    "webSite": "https://www.sbc.edu/"
  },
  {
    "alternateSearchName": "Syracuse",
    "city": "Syracuse",
    "country": "USA",
    "memberId": 264,
    "memberName": "Syracuse University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.syracuse.edu/admissions/undergraduate/"
  },
  {
    "alternateSearchName": "The University of Tampa",
    "city": "Tampa",
    "country": "USA",
    "memberId": 265,
    "memberName": "University of Tampa",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.ut.edu/admissions/"
  },
  {
    "alternateSearchName": "TCU",
    "city": "Fort worth",
    "country": "USA",
    "memberId": 266,
    "memberName": "Texas Christian University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.tcu.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Lexington",
    "country": "USA",
    "memberId": 267,
    "memberName": "Transylvania University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.transy.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Hartford",
    "country": "USA",
    "memberId": 268,
    "memberName": "Trinity College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.trincoll.edu"
  },
  {
    "alternateSearchName": "",
    "city": "San Antonio",
    "country": "USA",
    "memberId": 269,
    "memberName": "Trinity University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.trinity.edu/"
  },
  {
    "alternateSearchName": "SMFA AT TUFTS, SMFA, BOSTON, MEDFORD, School of the Museum of Fine Arts at Tufts. SMFA @ TUFTS, School of the Museum of Fine Arts at Tufts, School of the Museum of Fine Arts",
    "city": "Medford",
    "country": "USA",
    "memberId": 270,
    "memberName": "Tufts University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.tufts.edu/"
  },
  {
    "alternateSearchName": "TU, Tulsa University",
    "city": "Tulsa",
    "country": "USA",
    "memberId": 272,
    "memberName": "The University of Tulsa",
    "memberTypeDescription": "Coed",
    "webSite": "http://admission.utulsa.edu/"
  },
  {
    "alternateSearchName": "Union, Union College, Union (NY), Union College (NY)",
    "city": "Schenectady",
    "country": "USA",
    "memberId": 273,
    "memberName": "Union College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.union.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Collegeville",
    "country": "USA",
    "memberId": 274,
    "memberName": "Ursinus College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.ursinus.edu/admission"
  },
  {
    "alternateSearchName": "",
    "city": "Utica",
    "country": "USA",
    "memberId": 275,
    "memberName": "Utica University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.utica.edu"
  },
  {
    "alternateSearchName": "Valpo",
    "city": "Valparaiso",
    "country": "USA",
    "memberId": 276,
    "memberName": "Valparaiso University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.valpo.edu/"
  },
  {
    "alternateSearchName": "VU, Vandy",
    "city": "Nashville",
    "country": "USA",
    "memberId": 277,
    "memberName": "Vanderbilt University",
    "memberTypeDescription": "Coed",
    "webSite": "http://admissions.vanderbilt.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Poughkeepsie",
    "country": "USA",
    "memberId": 278,
    "memberName": "Vassar College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.vassar.edu"
  },
  {
    "alternateSearchName": "UVM",
    "city": "Burlington",
    "country": "USA",
    "memberId": 279,
    "memberName": "University of Vermont",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.uvm.edu/admissions/undergraduate"
  },
  {
    "alternateSearchName": "Nova",
    "city": "Villanova",
    "country": "USA",
    "memberId": 280,
    "memberName": "Villanova University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.villanova.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Crawfordsville",
    "country": "USA",
    "memberId": 281,
    "memberName": "Wabash College",
    "memberTypeDescription": "Men",
    "webSite": "http://www.wabash.edu"
  },
  {
    "alternateSearchName": "Wagner",
    "city": "Staten Island",
    "country": "USA",
    "memberId": 282,
    "memberName": "Wagner College",
    "memberTypeDescription": "Coed",
    "webSite": "https://wagner.edu"
  },
  {
    "alternateSearchName": "WFU, Wake Forrest, Wake",
    "city": "Winston Salem",
    "country": "USA",
    "memberId": 283,
    "memberName": "Wake Forest University",
    "memberTypeDescription": "Coed",
    "webSite": "http://wfu.edu"
  },
  {
    "alternateSearchName": "W&J, W & J, W and J, Wash Jeff",
    "city": "Washington",
    "country": "USA",
    "memberId": 284,
    "memberName": "Washington & Jefferson College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.washjeff.edu/"
  },
  {
    "alternateSearchName": "w & l,w&l, washington & lee university, washington & lee, Wash & Lee, Wash and Lee, Wash Lee, W and L, washington and lee",
    "city": "Lexington",
    "country": "USA",
    "memberId": 285,
    "memberName": "Washington and Lee University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.wlu.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Chestertown",
    "country": "USA",
    "memberId": 286,
    "memberName": "Washington College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.washcoll.edu/admissions/"
  },
  {
    "alternateSearchName": "wash u, washu, wustl",
    "city": "St. Louis",
    "country": "USA",
    "memberId": 287,
    "memberName": "Washington University in St. Louis",
    "memberTypeDescription": "Coed",
    "webSite": "http://admissions.wustl.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "St. Louis",
    "country": "USA",
    "memberId": 288,
    "memberName": "Webster University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.webster.edu"
  },
  {
    "alternateSearchName": "Wellesley",
    "city": "Wellesley",
    "country": "USA",
    "memberId": 289,
    "memberName": "Wellesley College",
    "memberTypeDescription": "Women",
    "webSite": "http://www.wellesley.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Aurora",
    "country": "USA",
    "memberId": 290,
    "memberName": "Wells College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.wells.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Middletown",
    "country": "USA",
    "memberId": 291,
    "memberName": "Wesleyan University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.wesleyan.edu/admission"
  },
  {
    "alternateSearchName": "WestMO, Westminster College Missouri",
    "city": "Fulton",
    "country": "USA",
    "memberId": 292,
    "memberName": "Westminster College (Missouri)",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.wcmo.edu"
  },
  {
    "alternateSearchName": "Westminster",
    "city": "New Wilmington",
    "country": "USA",
    "memberId": 293,
    "memberName": "Westminster College (Pennsylvania)",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.westminster.edu"
  },
  {
    "alternateSearchName": "Wheaton College MA",
    "city": "Norton",
    "country": "USA",
    "memberId": 294,
    "memberName": "Wheaton College, Massachusetts",
    "memberTypeDescription": "Coed",
    "webSite": "http://wheatoncollege.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Walla Walla",
    "country": "USA",
    "memberId": 296,
    "memberName": "Whitman College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.whitman.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Whittier",
    "country": "USA",
    "memberId": 297,
    "memberName": "Whittier College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.whittier.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Salem",
    "country": "USA",
    "memberId": 298,
    "memberName": "Willamette University",
    "memberTypeDescription": "Coed",
    "webSite": "http://willamette.edu/"
  },
  {
    "alternateSearchName": "William and Mary, College of William and Mary, W&M, The College of William and Mary, William & Mary, College of William & Mary",
    "city": "Williamsburg",
    "country": "USA",
    "memberId": 299,
    "memberName": "William & Mary",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.wm.edu/"
  },
  {
    "alternateSearchName": "WJC",
    "city": "Liberty",
    "country": "USA",
    "memberId": 300,
    "memberName": "William Jewell College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.jewell.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Williamstown",
    "country": "USA",
    "memberId": 301,
    "memberName": "Williams College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.williams.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Chambersburg",
    "country": "USA",
    "memberId": 302,
    "memberName": "Wilson College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.wilson.edu"
  },
  {
    "alternateSearchName": "Witt",
    "city": "Springfield",
    "country": "USA",
    "memberId": 303,
    "memberName": "Wittenberg University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.wittenberg.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Spartanburg",
    "country": "USA",
    "memberId": 304,
    "memberName": "Wofford College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.wofford.edu/"
  },
  {
    "alternateSearchName": "The College of Wooster",
    "city": "Wooster",
    "country": "USA",
    "memberId": 305,
    "memberName": "College of Wooster",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.wooster.edu/admissions"
  },
  {
    "alternateSearchName": "WPI",
    "city": "Worcester",
    "country": "USA",
    "memberId": 306,
    "memberName": "Worcester Polytechnic Institute",
    "memberTypeDescription": "Coed",
    "webSite": "http://admissions.wpi.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Cincinnati",
    "country": "USA",
    "memberId": 307,
    "memberName": "Xavier University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.xavier.edu"
  },
  {
    "alternateSearchName": "",
    "city": "New Haven",
    "country": "USA",
    "memberId": 308,
    "memberName": "Yale University",
    "memberTypeDescription": "Coed",
    "webSite": "http://admissions.yale.edu/"
  },
  {
    "alternateSearchName": "Quinnipiac, Quinn, QU, University of Quinnipiac",
    "city": "Hamden",
    "country": "USA",
    "memberId": 310,
    "memberName": "Quinnipiac University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.qu.edu"
  },
  {
    "alternateSearchName": "SUNY, Albany, SUNY, University at Albany",
    "city": "Albany",
    "country": "USA",
    "memberId": 311,
    "memberName": "SUNY, University at Albany",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.albany.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Mount Berry",
    "country": "USA",
    "memberId": 312,
    "memberName": "Berry College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.berry.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Rock Island",
    "country": "USA",
    "memberId": 313,
    "memberName": "Augustana College (Illinois)",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.augustana.edu"
  },
  {
    "alternateSearchName": "JTS, List College, Joint Program, Double Degree Program",
    "city": "New York",
    "country": "USA",
    "memberId": 314,
    "memberName": "List College The Jewish Theological Seminary",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.jtsa.edu/list"
  },
  {
    "alternateSearchName": "",
    "city": "Sioux Falls",
    "country": "USA",
    "memberId": 315,
    "memberName": "Augustana University (South Dakota)",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.augie.edu"
  },
  {
    "alternateSearchName": "CSU",
    "city": "Fort Collins",
    "country": "USA",
    "memberId": 316,
    "memberName": "Colorado State University",
    "memberTypeDescription": "Coed",
    "webSite": "https://admissions.colostate.edu/"
  },
  {
    "alternateSearchName": "UD, Dayton University",
    "city": "Dayton",
    "country": "USA",
    "memberId": 317,
    "memberName": "University of Dayton",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.udayton.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Boston",
    "country": "USA",
    "memberId": 318,
    "memberName": "Emerson College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.emerson.edu"
  },
  {
    "alternateSearchName": "Franklin Pierce, FPU",
    "city": "Rindge",
    "country": "USA",
    "memberId": 319,
    "memberName": "Franklin Pierce University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.franklinpierce.edu"
  },
  {
    "alternateSearchName": "IIT, Illinois Tech",
    "city": "Chicago",
    "country": "USA",
    "memberId": 320,
    "memberName": "Illinois Institute of Technology",
    "memberTypeDescription": "Coed",
    "webSite": "http://web.iit.edu"
  },
  {
    "alternateSearchName": "",
    "city": "La Plume",
    "country": "USA",
    "memberId": 321,
    "memberName": "Keystone College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.keystone.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Raleigh",
    "country": "USA",
    "memberId": 322,
    "memberName": "Meredith College",
    "memberTypeDescription": "Women",
    "webSite": "http://www.meredith.edu/"
  },
  {
    "alternateSearchName": "UNH, UNew Haven",
    "city": "West Haven",
    "country": "USA",
    "memberId": 323,
    "memberName": "University of New Haven",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.newhaven.edu/"
  },
  {
    "alternateSearchName": "Pacific University Oregon, Pacific University",
    "city": "Forest Grove",
    "country": "USA",
    "memberId": 325,
    "memberName": "Pacific University Oregon",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.pacificu.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Galloway",
    "country": "USA",
    "memberId": 326,
    "memberName": "Stockton University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.stockton.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Stanford",
    "country": "USA",
    "memberId": 327,
    "memberName": "Stanford University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.stanford.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Greenville",
    "country": "USA",
    "memberId": 328,
    "memberName": "Thiel College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.thiel.edu"
  },
  {
    "alternateSearchName": "TC",
    "city": "Waterville",
    "country": "USA",
    "memberId": 329,
    "memberName": "Thomas College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.thomas.edu"
  },
  {
    "alternateSearchName": "Westminster College, Westminster University",
    "city": "Salt Lake City",
    "country": "USA",
    "memberId": 330,
    "memberName": "Westminster University (Utah)",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.westminsteru.edu/"
  },
  {
    "alternateSearchName": "Augsburg University",
    "city": "Minneapolis",
    "country": "USA",
    "memberId": 332,
    "memberName": "Augsburg University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.augsburg.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Buffalo",
    "country": "USA",
    "memberId": 333,
    "memberName": "Canisius University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.canisius.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Milton",
    "country": "USA",
    "memberId": 334,
    "memberName": "Curry College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.curry.edu"
  },
  {
    "alternateSearchName": "Saint Paul, St. Paul, St Paul, Hamline, Hamline University",
    "city": "Saint Paul",
    "country": "USA",
    "memberId": 336,
    "memberName": "Hamline University (MN)",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.hamline.edu/"
  },
  {
    "alternateSearchName": "HC",
    "city": "Frederick",
    "country": "USA",
    "memberId": 337,
    "memberName": "Hood College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.hood.edu/"
  },
  {
    "alternateSearchName": "IC",
    "city": "Jacksonville",
    "country": "USA",
    "memberId": 338,
    "memberName": "Illinois College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.ic.edu"
  },
  {
    "alternateSearchName": "IU, Malvern, iu, Mighty Mac, West Chester, Chester County",
    "city": "Malvern",
    "country": "USA",
    "memberId": 339,
    "memberName": "Immaculata University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.immaculata.edu"
  },
  {
    "alternateSearchName": "LMU",
    "city": "Los Angeles",
    "country": "USA",
    "memberId": 341,
    "memberName": "Loyola Marymount University",
    "memberTypeDescription": "Coed",
    "webSite": "http://admission.lmu.edu"
  },
  {
    "alternateSearchName": "Lycoming Lyco",
    "city": "Williamsport",
    "country": "USA",
    "memberId": 342,
    "memberName": "Lycoming College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.lycoming.edu/"
  },
  {
    "alternateSearchName": "LU, Lyn University",
    "city": "Boca Raton",
    "country": "USA",
    "memberId": 343,
    "memberName": "Lynn University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.lynn.edu"
  },
  {
    "alternateSearchName": "saint edwards, st. edwards, st. edward's, saint edward's, st edwards, st edward's, st eds, st. eds, steds, st ed's",
    "city": "Austin",
    "country": "USA",
    "memberId": 344,
    "memberName": "St. Edward's University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.stedwards.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Oneonta",
    "country": "USA",
    "memberId": 345,
    "memberName": "SUNY Oneonta",
    "memberTypeDescription": "Coed",
    "webSite": "http://suny.oneonta.edu/admissions"
  },
  {
    "alternateSearchName": "SUNY Stony Brook",
    "city": "Stony Brook",
    "country": "USA",
    "memberId": 346,
    "memberName": "SUNY Stony Brook University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.stonybrook.edu/ugadmissions"
  },
  {
    "alternateSearchName": "Cortland State, C-state, Cortland College",
    "city": "Cortland",
    "country": "USA",
    "memberId": 347,
    "memberName": "SUNY Cortland",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.cortland.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Fredonia",
    "country": "USA",
    "memberId": 348,
    "memberName": "SUNY Fredonia",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.fredonia.edu/admissions"
  },
  {
    "alternateSearchName": "",
    "city": "New Paltz",
    "country": "USA",
    "memberId": 349,
    "memberName": "SUNY New Paltz",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.newpaltz.edu"
  },
  {
    "alternateSearchName": "The University of Chicago, UChicago",
    "city": "Chicago",
    "country": "USA",
    "memberId": 350,
    "memberName": "University of Chicago",
    "memberTypeDescription": "Coed",
    "webSite": "https://collegeadmissions.uchicago.edu/"
  },
  {
    "alternateSearchName": "UMB, University of Massachusetts Boston, University of Massachusetts - Boston, UMass Boston",
    "city": "Boston",
    "country": "USA",
    "memberId": 351,
    "memberName": "University of Massachusetts Boston",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.umb.edu/admissions/"
  },
  {
    "alternateSearchName": "UMM, Machias, UMaine Machias",
    "city": "Machias",
    "country": "USA",
    "memberId": 352,
    "memberName": "University of Maine at Machias",
    "memberTypeDescription": "Coed",
    "webSite": "https://machias.edu/"
  },
  {
    "alternateSearchName": "UND, Notre Dame, University of Notre Dame, ND",
    "city": "Notre Dame",
    "country": "USA",
    "memberId": 353,
    "memberName": "University of Notre Dame",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.nd.edu/"
  },
  {
    "alternateSearchName": "UVA",
    "city": "Charlottesville",
    "country": "USA",
    "memberId": 354,
    "memberName": "University of Virginia",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.virginia.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Boston",
    "country": "USA",
    "memberId": 355,
    "memberName": "Wentworth Institute of Technology",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.wit.edu/"
  },
  {
    "alternateSearchName": "The Sage Colleges, Sage College of Albany, Junior College of Albany, Sage, Russell, Russell Sage",
    "city": "Troy",
    "country": "USA",
    "memberId": 357,
    "memberName": "Russell Sage College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.sage.edu/admission/"
  },
  {
    "alternateSearchName": "",
    "city": "Orange",
    "country": "USA",
    "memberId": 360,
    "memberName": "Chapman University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.chapman.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Helena",
    "country": "USA",
    "memberId": 361,
    "memberName": "Carroll College (Montana)",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.carroll.edu"
  },
  {
    "alternateSearchName": "Lasell, Lasell College, Lasell University",
    "city": "Newton",
    "country": "USA",
    "memberId": 363,
    "memberName": "Lasell University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.lasell.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Rosemont",
    "country": "USA",
    "memberId": 364,
    "memberName": "Rosemont College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.rosemont.edu/"
  },
  {
    "alternateSearchName": "St John Fisher, St. John, Fisher, Saint John Fisher, St. John Fisher University",
    "city": "Rochester",
    "country": "USA",
    "memberId": 365,
    "memberName": "St. John Fisher University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.sjf.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Buffalo",
    "country": "USA",
    "memberId": 366,
    "memberName": "SUNY University at Buffalo",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.buffalo.edu"
  },
  {
    "alternateSearchName": "UNE",
    "city": "Biddeford",
    "country": "USA",
    "memberId": 368,
    "memberName": "University of New England",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.une.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Providence",
    "country": "USA",
    "memberId": 369,
    "memberName": "Brown University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.brown.edu"
  },
  {
    "alternateSearchName": "NONE",
    "city": "Oswego",
    "country": "USA",
    "memberId": 370,
    "memberName": "SUNY Oswego",
    "memberTypeDescription": "Coed",
    "webSite": "https://ww1.oswego.edu/"
  },
  {
    "alternateSearchName": "URI",
    "city": "Kingston",
    "country": "USA",
    "memberId": 376,
    "memberName": "University of Rhode Island",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.uri.edu/"
  },
  {
    "alternateSearchName": "Brockport",
    "city": "Brockport",
    "country": "USA",
    "memberId": 378,
    "memberName": "SUNY College at Brockport",
    "memberTypeDescription": "Coed",
    "webSite": "https://brockport.edu/admissions_aid/apply.html"
  },
  {
    "alternateSearchName": "St. Kate's",
    "city": "Saint Paul",
    "country": "USA",
    "memberId": 379,
    "memberName": "St. Catherine University",
    "memberTypeDescription": "Women",
    "webSite": "https://www.stkate.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Plattsburgh",
    "country": "USA",
    "memberId": 380,
    "memberName": "SUNY Plattsburgh",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.plattsburgh.edu/admissions/"
  },
  {
    "alternateSearchName": "Columbia, Columbia College",
    "city": "Chicago",
    "country": "USA",
    "memberId": 381,
    "memberName": "Columbia College Chicago",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.colum.edu/admissions"
  },
  {
    "alternateSearchName": "CCC, Cedar Crest",
    "city": "Allentown",
    "country": "USA",
    "memberId": 382,
    "memberName": "Cedar Crest College",
    "memberTypeDescription": "Women",
    "webSite": "http://www.cedarcrest.edu"
  },
  {
    "alternateSearchName": "Buff State, SUNY",
    "city": "Buffalo",
    "country": "USA",
    "memberId": 383,
    "memberName": "SUNY Buffalo State",
    "memberTypeDescription": "Coed",
    "webSite": "http://suny.buffalostate.edu/"
  },
  {
    "alternateSearchName": "SU",
    "city": "Owings Mills",
    "country": "USA",
    "memberId": 385,
    "memberName": "Stevenson University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.stevenson.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Des Moines",
    "country": "USA",
    "memberId": 386,
    "memberName": "Drake University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.drake.edu"
  },
  {
    "alternateSearchName": "St Thomas Aquinas College, Saint Thomas Aquinas College, St Thomas, Saint Thomas, stac",
    "city": "Sparkill",
    "country": "USA",
    "memberId": 387,
    "memberName": "St. Thomas Aquinas College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.stac.edu"
  },
  {
    "alternateSearchName": "Olin College",
    "city": "Needham",
    "country": "USA",
    "memberId": 388,
    "memberName": "Franklin W. Olin College of Engineering",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.olin.edu"
  },
  {
    "alternateSearchName": "Saint Bonaventure, St Bonaventure, St Bonas, Saint Bonas, St Bona, St. Bona, St. Bonaventure, Bonaventure, Bona, Bonas",
    "city": "St. Bonaventure",
    "country": "USA",
    "memberId": 389,
    "memberName": "St. Bonaventure University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.sbu.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Holland",
    "country": "USA",
    "memberId": 390,
    "memberName": "Hope College",
    "memberTypeDescription": "Coed",
    "webSite": "https://hope.edu"
  },
  {
    "alternateSearchName": "KSC, Keene State, Keene",
    "city": "Keene",
    "country": "USA",
    "memberId": 391,
    "memberName": "Keene State College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.keene.edu/admissions"
  },
  {
    "alternateSearchName": "",
    "city": "Painesville",
    "country": "USA",
    "memberId": 392,
    "memberName": "Lake Erie College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.lec.edu"
  },
  {
    "alternateSearchName": "LIU, Post, LIU Post, LIU Brooklyn, LIU Global, Long Island University",
    "city": "Brookville",
    "country": "USA",
    "memberId": 393,
    "memberName": "Long Island University ",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.liu.edu/"
  },
  {
    "alternateSearchName": "SPU",
    "city": "Seattle",
    "country": "USA",
    "memberId": 394,
    "memberName": "Seattle Pacific University",
    "memberTypeDescription": "Coed",
    "webSite": "https://spu.edu"
  },
  {
    "alternateSearchName": "Marymount Manhattan, MMC, Griffins",
    "city": "New York",
    "country": "USA",
    "memberId": 395,
    "memberName": "Marymount Manhattan College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.mmm.edu/"
  },
  {
    "alternateSearchName": "Saint Francis, SFU, St. Francis",
    "city": "Loretto",
    "country": "USA",
    "memberId": 396,
    "memberName": "Saint Francis University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.francis.edu"
  },
  {
    "alternateSearchName": "",
    "city": "St. Louis",
    "country": "USA",
    "memberId": 398,
    "memberName": "Maryville University of St. Louis",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.maryville.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Sarasota",
    "country": "USA",
    "memberId": 399,
    "memberName": "Ringling College of Art and Design",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.ringling.edu"
  },
  {
    "alternateSearchName": "Menlo",
    "city": "Atherton",
    "country": "USA",
    "memberId": 400,
    "memberName": "Menlo College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.menlo.edu/admissions-financial-aid/"
  },
  {
    "alternateSearchName": "",
    "city": "Purchase",
    "country": "USA",
    "memberId": 401,
    "memberName": "Purchase College, SUNY",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.purchase.edu/about/"
  },
  {
    "alternateSearchName": "Mercyhurst College",
    "city": "Erie",
    "country": "USA",
    "memberId": 402,
    "memberName": "Mercyhurst University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.mercyhurst.edu/"
  },
  {
    "alternateSearchName": "Mount Saint Mary,Mt Saint Mary,Mount St Mary,Mt. Saint Mary, Mount St. Mary's University, Mount Saint Mary's University, MSMU",
    "city": "Los Angeles",
    "country": "USA",
    "memberId": 405,
    "memberName": "Mount Saint Mary's University Los Angeles",
    "memberTypeDescription": "Women",
    "webSite": "http://www.msmu.edu/admission/"
  },
  {
    "alternateSearchName": "OCU, OKC, OKCU",
    "city": "Oklahoma City",
    "country": "USA",
    "memberId": 408,
    "memberName": "Oklahoma City University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.okcu.edu/"
  },
  {
    "alternateSearchName": "PLU",
    "city": "Tacoma",
    "country": "USA",
    "memberId": 409,
    "memberName": "Pacific Lutheran University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.plu.edu/"
  },
  {
    "alternateSearchName": "Seaver College",
    "city": "Malibu",
    "country": "USA",
    "memberId": 410,
    "memberName": "Pepperdine University",
    "memberTypeDescription": "Coed",
    "webSite": "http://seaver.pepperdine.edu/admission/"
  },
  {
    "alternateSearchName": "TJU,PhilaU,Phila. Univ,Thomas Jefferson University,East Falls,Philadelphia University,Philadelphia,Jefferson",
    "city": "Philadelphia",
    "country": "USA",
    "memberId": 411,
    "memberName": "Thomas Jefferson University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.jefferson.edu/"
  },
  {
    "alternateSearchName": "NYIT, New York Tech, NY Tech",
    "city": "Old Westbury",
    "country": "USA",
    "memberId": 414,
    "memberName": "New York Institute of Technology (NYIT)",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.nyit.edu/"
  },
  {
    "alternateSearchName": "UMass Dartmouth",
    "city": "Dartmouth",
    "country": "USA",
    "memberId": 415,
    "memberName": "University of Massachusetts Dartmouth",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.umassd.edu"
  },
  {
    "alternateSearchName": "UMass",
    "city": "Lowell",
    "country": "USA",
    "memberId": 416,
    "memberName": "University of Massachusetts Lowell",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.uml.edu/"
  },
  {
    "alternateSearchName": "Kings College",
    "city": "Wilkes-Barre",
    "country": "USA",
    "memberId": 418,
    "memberName": "King's College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.kings.edu/"
  },
  {
    "alternateSearchName": "PSU, Plymouth State College",
    "city": "Plymouth",
    "country": "USA",
    "memberId": 419,
    "memberName": "Plymouth State University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.plymouth.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Niagara University",
    "country": "USA",
    "memberId": 420,
    "memberName": "Niagara University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.niagara.edu"
  },
  {
    "alternateSearchName": "SMUMN, Saint Mary's University, St. Mary's University, St. Mary's University of Minnesota",
    "city": "Winona",
    "country": "USA",
    "memberId": 421,
    "memberName": "Saint Mary's University of Minnesota",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.smumn.edu"
  },
  {
    "alternateSearchName": "ESF, SUNY ESF",
    "city": "Syracuse",
    "country": "USA",
    "memberId": 423,
    "memberName": "SUNY College of Environmental Science & Forestry",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.esf.edu/"
  },
  {
    "alternateSearchName": "Daemen",
    "city": "Amherst",
    "country": "USA",
    "memberId": 424,
    "memberName": "Daemen University ",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.daemen.edu/admissions"
  },
  {
    "alternateSearchName": "JU, study abroad,international, campus, Europe, Germany, JUB, Constructor University, Jacobs University",
    "city": "Bremen",
    "country": "DEU",
    "memberId": 425,
    "memberName": "Constructor University",
    "memberTypeDescription": "Coed",
    "webSite": "https://constructor.university/"
  },
  {
    "alternateSearchName": "ACPHS, Albany, Albany Pharm, ACP",
    "city": "Albany",
    "country": "USA",
    "memberId": 426,
    "memberName": "Albany College of Pharmacy and Health Sciences",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.acphs.edu/"
  },
  {
    "alternateSearchName": "Johnson State College, NVUJ, Johnson, NVU, JSC, Johnson State, Lyndon State College, NVUL, Lyndon, NVU, LSC, Lyndon State, Lyndonville, Northern Vermont, Northern Vermont University, Northern Vermont University Johnson, Northern Vermont University Lyndon, Castleton State College, Castleton, Castleton University, CU , Castleton State, C State,VTC, Vermont Tech, Vermont Technical College, Vermont, Vermont State, Vermont University, Vermont State College, CU, CSC, VTSU, VSU, Williston, Randolph",
    "city": "Randolph Center",
    "country": "USA",
    "memberId": 428,
    "memberName": "Vermont State University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.vermontstate.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Newburgh",
    "country": "USA",
    "memberId": 429,
    "memberName": "Mount Saint Mary College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.msmc.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Throggs Neck",
    "country": "USA",
    "memberId": 430,
    "memberName": "SUNY Maritime College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.sunymaritime.edu"
  },
  {
    "alternateSearchName": "wne, WNE, New England, WNEC, WNEU, wneu, Western New England, WESTERN NEW ENGLAND",
    "city": "Springfield",
    "country": "USA",
    "memberId": 431,
    "memberName": "Western New England University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.wne.edu/"
  },
  {
    "alternateSearchName": "FIT, Florida Tech, Florida Institute of Technology",
    "city": "Melbourne",
    "country": "USA",
    "memberId": 434,
    "memberName": "Florida Institute of Technology",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.fit.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Potsdam",
    "country": "USA",
    "memberId": 435,
    "memberName": "SUNY Potsdam",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.potsdam.edu/admissions"
  },
  {
    "alternateSearchName": "",
    "city": "New Orleans",
    "country": "USA",
    "memberId": 437,
    "memberName": "Xavier University of Louisiana",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.xula.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Westerville",
    "country": "USA",
    "memberId": 438,
    "memberName": "Otterbein University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.otterbein.edu"
  },
  {
    "alternateSearchName": "umich, mich",
    "city": "Ann Arbor",
    "country": "USA",
    "memberId": 439,
    "memberName": "University of Michigan",
    "memberTypeDescription": "Coed",
    "webSite": "http://admissions.umich.edu/"
  },
  {
    "alternateSearchName": "St. John, St. Johns, St.John’s, St. John College, St. Johns College,  St John, St Johns, St John’s, St John College, St Johns College, St John's College, Saint John, Saint Johns, Saint John’s, Saint Johns College, Saint John's College, SJC",
    "city": "Annapolis",
    "country": "USA",
    "memberId": 440,
    "memberName": "St. John's College (MD)",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.sjc.edu/annapolis"
  },
  {
    "alternateSearchName": "FBU, Fontbonne, Fontbonne College",
    "city": "St Louis",
    "country": "USA",
    "memberId": 441,
    "memberName": "Fontbonne University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.fontbonne.edu/"
  },
  {
    "alternateSearchName": "UMBC, UMBC: University of Maryland, Baltimore County, University of Maryland, Baltimore County",
    "city": "Baltimore",
    "country": "USA",
    "memberId": 442,
    "memberName": "UMBC University of Maryland Baltimore County",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.umbc.edu/"
  },
  {
    "alternateSearchName": "APU, AK Pacific",
    "city": "Anchorage",
    "country": "USA",
    "memberId": 443,
    "memberName": "Alaska Pacific University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.alaskapacific.edu"
  },
  {
    "alternateSearchName": "UConn",
    "city": "Storrs",
    "country": "USA",
    "memberId": 444,
    "memberName": "University of Connecticut",
    "memberTypeDescription": "Coed",
    "webSite": "http://uconn.edu"
  },
  {
    "alternateSearchName": "",
    "city": "New York",
    "country": "USA",
    "memberId": 445,
    "memberName": "Columbia University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.columbia.edu/"
  },
  {
    "alternateSearchName": "UNC Asheville, UNCA, Asheville",
    "city": "Asheville",
    "country": "USA",
    "memberId": 446,
    "memberName": "University of North Carolina Asheville",
    "memberTypeDescription": "Coed",
    "webSite": "https://unca.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Santa Barbara",
    "country": "USA",
    "memberId": 447,
    "memberName": "Westmont College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.westmont.edu/admissions-aid"
  },
  {
    "alternateSearchName": "SAIC, design, arts, siac, art institute",
    "city": "Chicago",
    "country": "USA",
    "memberId": 448,
    "memberName": "School of the Art Institute of Chicago",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.saic.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Chicago",
    "country": "USA",
    "memberId": 451,
    "memberName": "DePaul University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.depaul.edu/Pages/default.aspx"
  },
  {
    "alternateSearchName": "",
    "city": "Bangor",
    "country": "USA",
    "memberId": 452,
    "memberName": "Husson University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.husson.edu"
  },
  {
    "alternateSearchName": "GU, Gannon",
    "city": "Erie",
    "country": "USA",
    "memberId": 453,
    "memberName": "Gannon University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.gannon.edu"
  },
  {
    "alternateSearchName": "AU, American, Italy, Rome, Europe, study abroad, AUR, abroad",
    "city": "Rome",
    "country": "ITA",
    "memberId": 455,
    "memberName": "The American University of Rome",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.aur.edu/"
  },
  {
    "alternateSearchName": "St. John, St. Johns, St.John's, St. John College, St. Johns College, St Johns, St John's, St John College, St Johns College, St John's College, Saint John, Saint Johns, Saint John's, Saint Johns College, Saint John's College, SJC, Johnnies, johnnies, Johnnie, johnnie",
    "city": "Santa Fe",
    "country": "USA",
    "memberId": 456,
    "memberName": "St. John's College (NM)",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.sjc.edu/santa-fe?utm_source=CommonApp&utm_medium=profile&utm_content=sf_commonapp_profile"
  },
  {
    "alternateSearchName": "",
    "city": "Caldwell",
    "country": "USA",
    "memberId": 458,
    "memberName": "Caldwell University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.caldwell.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Waukesha",
    "country": "USA",
    "memberId": 459,
    "memberName": "Carroll University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.carrollu.edu"
  },
  {
    "alternateSearchName": "Centenary, Centenary University, Centenary New Jersey, Centenary U., Centenary College",
    "city": "Hackettstown",
    "country": "USA",
    "memberId": 460,
    "memberName": "Centenary University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.centenaryuniversity.edu"
  },
  {
    "alternateSearchName": "CBU",
    "city": "Memphis",
    "country": "USA",
    "memberId": 461,
    "memberName": "Christian Brothers University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.cbu.edu/"
  },
  {
    "alternateSearchName": "CNU",
    "city": "Newport News",
    "country": "USA",
    "memberId": 462,
    "memberName": "Christopher Newport University",
    "memberTypeDescription": "Coed",
    "webSite": "http://cnu.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Center Valley",
    "country": "USA",
    "memberId": 464,
    "memberName": "DeSales University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.desales.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Springfield",
    "country": "USA",
    "memberId": 465,
    "memberName": "Drury University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.drury.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "St. Augustine",
    "country": "USA",
    "memberId": 466,
    "memberName": "Flagler College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.flagler.edu"
  },
  {
    "alternateSearchName": "FUS, FCS, Franklin College, Franklin College Switzerland",
    "city": "6924 Sorengo (Lugano)",
    "country": "CHE",
    "memberId": 467,
    "memberName": "Franklin University Switzerland",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.fus.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Goshen",
    "country": "USA",
    "memberId": 468,
    "memberName": "Goshen College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.goshen.edu"
  },
  {
    "alternateSearchName": "HU, Howard",
    "city": "Washington",
    "country": "USA",
    "memberId": 469,
    "memberName": "Howard University",
    "memberTypeDescription": "Coed",
    "webSite": "http://howard.edu/"
  },
  {
    "alternateSearchName": "JCU, American University in Rome, American University Abroad, Europe, Italy, Rome, Study Abroad, JCU Rome, American University in Italy, American University in Europe",
    "city": "Rome 00165",
    "country": "ITA",
    "memberId": 470,
    "memberName": "John Cabot University in Rome",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.johncabot.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Mahwah",
    "country": "USA",
    "memberId": 474,
    "memberName": "Ramapo College of New Jersey",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.ramapo.edu"
  },
  {
    "alternateSearchName": "St Martin's St Martin Saint Martin University St. Martin’s St. Martins St. Martin Saint Martin’s Saint Martin’s University St. Martin’s",
    "city": "Lacey",
    "country": "USA",
    "memberId": 476,
    "memberName": "Saint Martin's University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.stmartin.edu/"
  },
  {
    "alternateSearchName": "Salsbury, Salisbary, Salsbary, SU",
    "city": "Salisbury",
    "country": "USA",
    "memberId": 477,
    "memberName": "Salisbury University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.salisbury.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Birmingham",
    "country": "USA",
    "memberId": 478,
    "memberName": "Samford University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.samford.edu/"
  },
  {
    "alternateSearchName": "St. Joseph's University, NY - Long Island Campus. Saint Joseph's, Saint Josephs, St Josephs, sjc, St. Joseph's College, St. Josephs College, st. joes, st joes, st josephs college",
    "city": "Patchogue",
    "country": "USA",
    "memberId": 480,
    "memberName": "St. Joseph’s University, New York - Long Island Campus",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.sjny.edu/long-island/admissions"
  },
  {
    "alternateSearchName": "",
    "city": "Old Westbury",
    "country": "USA",
    "memberId": 481,
    "memberName": "SUNY College at Old Westbury",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.oldwestbury.edu/"
  },
  {
    "alternateSearchName": "SUNY IT,SUNY Institute of Technology,SUNYIT",
    "city": "Utica",
    "country": "USA",
    "memberId": 482,
    "memberName": "SUNY Polytechnic Institute",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.suny.edu/campuses/sunypoly/"
  },
  {
    "alternateSearchName": "AUP, AU, American University, France, Paris, American, Europe, study abroad",
    "city": "Paris",
    "country": "FRA",
    "memberId": 483,
    "memberName": "The American University of Paris",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.aup.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Towson",
    "country": "USA",
    "memberId": 484,
    "memberName": "Towson University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.towson.edu/admissions/undergrad/freshmen/"
  },
  {
    "alternateSearchName": "UE",
    "city": "Evansville",
    "country": "USA",
    "memberId": 485,
    "memberName": "University of Evansville",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.evansville.edu"
  },
  {
    "alternateSearchName": "",
    "city": "West Hartford",
    "country": "USA",
    "memberId": 486,
    "memberName": "University of Hartford",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.hartford.edu"
  },
  {
    "alternateSearchName": "UK, uky",
    "city": "Lexington",
    "country": "USA",
    "memberId": 487,
    "memberName": "University of Kentucky",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.uky.edu"
  },
  {
    "alternateSearchName": "UNO",
    "city": "New Orleans",
    "country": "USA",
    "memberId": 488,
    "memberName": "University of New Orleans",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.uno.edu/"
  },
  {
    "alternateSearchName": "UNC Chapel Hill",
    "city": "Chapel Hill",
    "country": "USA",
    "memberId": 489,
    "memberName": "University of North Carolina at Chapel Hill",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.unc.edu/"
  },
  {
    "alternateSearchName": "unc wilmington, U north carolina wilmington, university of north carolina at wilmington, unc at wilmington, uncw",
    "city": "Wilmington",
    "country": "USA",
    "memberId": 490,
    "memberName": "University of North Carolina Wilmington",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.uncw.edu/"
  },
  {
    "alternateSearchName": "USC",
    "city": "Los Angeles",
    "country": "USA",
    "memberId": 492,
    "memberName": "University of Southern California",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.usc.edu"
  },
  {
    "alternateSearchName": "University of St. Andrews Andrew's, Saint, St, Andrew, Europe, UK, study abroad, Scotland",
    "city": "St Andrews",
    "country": "GBR",
    "memberId": 493,
    "memberName": "University of St Andrews",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.st-andrews.ac.uk/study/"
  },
  {
    "alternateSearchName": "",
    "city": "Waverly",
    "country": "USA",
    "memberId": 495,
    "memberName": "Wartburg College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.wartburg.edu/admissions/"
  },
  {
    "alternateSearchName": "Wheeling Jesuit, Wheeling Jesuit University, Wheeling, WJU, Wheeling University",
    "city": "Wheeling",
    "country": "USA",
    "memberId": 496,
    "memberName": "Wheeling University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.wheeling.edu/admissions"
  },
  {
    "alternateSearchName": "ECSU, Eastern",
    "city": "Willimantic",
    "country": "USA",
    "memberId": 498,
    "memberName": "Eastern Connecticut State University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.easternct.edu/index.html"
  },
  {
    "alternateSearchName": "Saint Joseph's, St Josephs, joseph, St. Joseph's, St. Josephs, Saint Josephs, SJNY Brooklyn, St. Joseph's University, St. Joseph's University, New York",
    "city": "Brooklyn",
    "country": "USA",
    "memberId": 502,
    "memberName": "St. Joseph's University, New York - Brooklyn Campus",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.sjny.edu/brooklyn/admissions"
  },
  {
    "alternateSearchName": "st. marys college of maryland, st marys college of maryland, smcm, smcmd, st mary's, st. mary's",
    "city": "St. Mary's City",
    "country": "USA",
    "memberId": 503,
    "memberName": "St. Mary's College of Maryland",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.smcm.edu/admissions"
  },
  {
    "alternateSearchName": "RIC",
    "city": "Providence",
    "country": "USA",
    "memberId": 520,
    "memberName": "Rhode Island College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.ric.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Spokane",
    "country": "USA",
    "memberId": 521,
    "memberName": "Whitworth University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.whitworth.edu/cms/"
  },
  {
    "alternateSearchName": "",
    "city": "Alma",
    "country": "USA",
    "memberId": 523,
    "memberName": "Alma College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.alma.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Paxton",
    "country": "USA",
    "memberId": 524,
    "memberName": "Anna Maria College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.annamaria.edu"
  },
  {
    "alternateSearchName": "Calvin University",
    "city": "Grand Rapids",
    "country": "USA",
    "memberId": 526,
    "memberName": "Calvin University",
    "memberTypeDescription": "Coed",
    "webSite": "https://calvin.edu/"
  },
  {
    "alternateSearchName": "Concordia Irvine",
    "city": "Irvine",
    "country": "USA",
    "memberId": 527,
    "memberName": "Concordia University Irvine",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.cui.edu/"
  },
  {
    "alternateSearchName": "MU",
    "city": "North Manchester",
    "country": "USA",
    "memberId": 529,
    "memberName": "Manchester University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.manchester.edu"
  },
  {
    "alternateSearchName": "MU, Marymount",
    "city": "Arlington",
    "country": "USA",
    "memberId": 530,
    "memberName": "Marymount University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.marymount.edu/Admissions/Undergraduate-Students/Scholarship-Opportunities/Scholars-Programs"
  },
  {
    "alternateSearchName": "MCLA, Mass College of Liberal Arts",
    "city": "North Adams",
    "country": "USA",
    "memberId": 531,
    "memberName": "Massachusetts College of Liberal Arts",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.mcla.edu/"
  },
  {
    "alternateSearchName": "Mercer",
    "city": "Macon",
    "country": "USA",
    "memberId": 532,
    "memberName": "Mercer University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.mercer.edu"
  },
  {
    "alternateSearchName": "OSU, Ohio State",
    "city": "Columbus",
    "country": "USA",
    "memberId": 533,
    "memberName": "The Ohio State University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.osu.edu/"
  },
  {
    "alternateSearchName": "Richmond University, Richmond American, London, UK, Europe, Richmond University in London, study abroad, Richmond American University London",
    "city": "London",
    "country": "GBR",
    "memberId": 535,
    "memberName": "Richmond The American International University in London",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.richmond.ac.uk/"
  },
  {
    "alternateSearchName": "",
    "city": "Glassboro",
    "country": "USA",
    "memberId": 536,
    "memberName": "Rowan University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.rowan.edu/admissions"
  },
  {
    "alternateSearchName": "",
    "city": "Indianola",
    "country": "USA",
    "memberId": 538,
    "memberName": "Simpson College",
    "memberTypeDescription": "Coed",
    "webSite": "http://simpson.edu/"
  },
  {
    "alternateSearchName": "Soka, Soka University, SUA, SOKA",
    "city": "Aliso Viejo",
    "country": "USA",
    "memberId": 539,
    "memberName": "Soka University of America",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.soka.edu/"
  },
  {
    "alternateSearchName": "St. Thomas University, Saint Thomas University, St Thomas University, St. Thomas University FL, Saint Thomas University FL, St Thomas University FL",
    "city": "Miami Gardens",
    "country": "USA",
    "memberId": 540,
    "memberName": "St. Thomas University (FL)",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.stu.edu"
  },
  {
    "alternateSearchName": "The Cooper, The Cooper Union, Cooper Union, Copper, The Copper, Copper Union, The Advancement of Art & Science, TCU, CU,Cooper",
    "city": "New York",
    "country": "USA",
    "memberId": 541,
    "memberName": "Cooper Union for the Advancement of Science & Art",
    "memberTypeDescription": "Coed",
    "webSite": "http://cooper.edu/admissions"
  },
  {
    "alternateSearchName": "UTK, The University of Tennessee Knoxville",
    "city": "Knoxville",
    "country": "USA",
    "memberId": 542,
    "memberName": "The University of Tennessee Knoxville",
    "memberTypeDescription": "Coed",
    "webSite": "http://admissions.utk.edu"
  },
  {
    "alternateSearchName": "UIC, university Chicago, university Illinois Chicago, Illinois Chicago, university Illinois, UI chicago",
    "city": "Chicago",
    "country": "USA",
    "memberId": 544,
    "memberName": "University of Illinois Chicago",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.uic.edu/"
  },
  {
    "alternateSearchName": "Sterling, europe, study abroad, Stirling, United Kingdom, Stirling United Kingdom",
    "city": "Stirling",
    "country": "GBR",
    "memberId": 545,
    "memberName": "University of Stirling",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.stir.ac.uk/undergraduate-study/course-information/courses-a-to-z/"
  },
  {
    "alternateSearchName": "WWC, Wilson, Warren Wilson",
    "city": "Asheville",
    "country": "USA",
    "memberId": 547,
    "memberName": "Warren Wilson College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.warren-wilson.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Burbank",
    "country": "USA",
    "memberId": 548,
    "memberName": "Woodbury University",
    "memberTypeDescription": "Coed",
    "webSite": "http://woodbury.edu"
  },
  {
    "alternateSearchName": "College of Our Lady of the Elms",
    "city": "Chicopee",
    "country": "USA",
    "memberId": 550,
    "memberName": "Elms College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.elms.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Keuka Park",
    "country": "USA",
    "memberId": 551,
    "memberName": "Keuka College",
    "memberTypeDescription": "Coed",
    "webSite": "http://admissions.keuka.edu/"
  },
  {
    "alternateSearchName": "RISD",
    "city": "Providence",
    "country": "USA",
    "memberId": 552,
    "memberName": "Rhode Island School of Design",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.risd.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Carlinville",
    "country": "USA",
    "memberId": 553,
    "memberName": "Blackburn College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.blackburn.edu/"
  },
  {
    "alternateSearchName": "E&H",
    "city": "Emory",
    "country": "USA",
    "memberId": 554,
    "memberName": "Emory & Henry College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.ehc.edu/"
  },
  {
    "alternateSearchName": "Hult International Business School, Hult,  Hult Business School",
    "city": "Cambridge",
    "country": "USA",
    "memberId": 555,
    "memberName": "Hult International Business School – U.S. & U.K.",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.hult.edu/en/programs/undergraduate/"
  },
  {
    "alternateSearchName": "LincolnU, Lincoln, LU",
    "city": "Lincoln University",
    "country": "USA",
    "memberId": 557,
    "memberName": "Lincoln University of Pennsylvania",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.lincoln.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Rockville Centre",
    "country": "USA",
    "memberId": 559,
    "memberName": "Molloy University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.molloy.edu/admissions-aid/"
  },
  {
    "alternateSearchName": "",
    "city": "Salem",
    "country": "USA",
    "memberId": 560,
    "memberName": "Roanoke College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.roanoke.edu/"
  },
  {
    "alternateSearchName": "USJ",
    "city": "West Hartford",
    "country": "USA",
    "memberId": 561,
    "memberName": "University of Saint Joseph",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.usj.edu/"
  },
  {
    "alternateSearchName": "Cincinnati, UC",
    "city": "Cincinnati",
    "country": "USA",
    "memberId": 570,
    "memberName": "University of Cincinnati",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.uc.edu/"
  },
  {
    "alternateSearchName": "Purdue, Purdue West Lafayette, Purdue Indianapolis, Purdue Indy, Purdue University, Purdue University West Lafayette, Purdue University Indianapolis, Purdue University Indy",
    "city": "West Lafayette & Indianapolis",
    "country": "USA",
    "memberId": 571,
    "memberName": "Purdue University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.purdue.edu"
  },
  {
    "alternateSearchName": "CCA",
    "city": "San Francisco",
    "country": "USA",
    "memberId": 573,
    "memberName": "California College of the Arts",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.cca.edu/"
  },
  {
    "alternateSearchName": "CCSU",
    "city": "New Britain",
    "country": "USA",
    "memberId": 574,
    "memberName": "Central Connecticut State University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.ccsu.edu/"
  },
  {
    "alternateSearchName": "CSU, Chicago State University",
    "city": "Chicago",
    "country": "USA",
    "memberId": 575,
    "memberName": "Chicago State University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.csu.edu/"
  },
  {
    "alternateSearchName": "Felician, Felician University, Felician College",
    "city": "Rutherford",
    "country": "USA",
    "memberId": 577,
    "memberName": "Felician University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.felician.edu/"
  },
  {
    "alternateSearchName": "Georgia Tech, ga, Georgia, ga tech , tech, GT",
    "city": "Atlanta",
    "country": "USA",
    "memberId": 578,
    "memberName": "Georgia Institute of Technology",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.admission@gatech.edu/"
  },
  {
    "alternateSearchName": "Lakewood, Jersey Shore, GCU, Roary, blue, gold",
    "city": "Lakewood Township",
    "country": "USA",
    "memberId": 579,
    "memberName": "Georgian Court University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.georgian.edu"
  },
  {
    "alternateSearchName": "Hawaii, Hawaii Pacific University, Hawai’i, HPU, Hawaii Pacific, Pacific",
    "city": "Honolulu",
    "country": "USA",
    "memberId": 580,
    "memberName": "Hawaii Pacific University",
    "memberTypeDescription": "Coed",
    "webSite": "https://hpu.edu/admissions/"
  },
  {
    "alternateSearchName": "Kettering, GMI, General Motors Institute",
    "city": "Flint",
    "country": "USA",
    "memberId": 581,
    "memberName": "Kettering University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.kettering.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Scranton",
    "country": "USA",
    "memberId": 586,
    "memberName": "Marywood University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.marywood.edu/"
  },
  {
    "alternateSearchName": "MC, Mercy, Mercy College, Mercy University, MU",
    "city": "Dobbs Ferry",
    "country": "USA",
    "memberId": 587,
    "memberName": "Mercy University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.mercy.edu/"
  },
  {
    "alternateSearchName": "Monmouth, MU",
    "city": "West Long Branch",
    "country": "USA",
    "memberId": 589,
    "memberName": "Monmouth University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.monmouth.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Newberry",
    "country": "USA",
    "memberId": 590,
    "memberName": "Newberry College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.newberry.edu/"
  },
  {
    "alternateSearchName": "Sterling",
    "city": "Craftsbury Common",
    "country": "USA",
    "memberId": 593,
    "memberName": "Sterling College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.sterlingcollege.edu/"
  },
  {
    "alternateSearchName": "Temple",
    "city": "Philadelphia",
    "country": "USA",
    "memberId": 594,
    "memberName": "Temple University",
    "memberTypeDescription": "Coed",
    "webSite": "http://admissions.temple.edu/"
  },
  {
    "alternateSearchName": "Trinity",
    "city": "Palos Heights",
    "country": "USA",
    "memberId": 595,
    "memberName": "Trinity Christian College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.trnty.edu/"
  },
  {
    "alternateSearchName": "UA, The University of Aberdeen, Europe, study abroad",
    "city": "Aberdeen",
    "country": "GBR",
    "memberId": 597,
    "memberName": "University of Aberdeen",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.abdn.ac.uk/international/usa"
  },
  {
    "alternateSearchName": "CU Boulder, CU, UC Boulder,UCB",
    "city": "Boulder",
    "country": "USA",
    "memberId": 599,
    "memberName": "University of Colorado Boulder",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.colorado.edu/admissions"
  },
  {
    "alternateSearchName": "UMPI",
    "city": "Presque Isle",
    "country": "USA",
    "memberId": 600,
    "memberName": "University of Maine at Presque Isle",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.umpi.edu/"
  },
  {
    "alternateSearchName": "UNCG",
    "city": "Greensboro",
    "country": "USA",
    "memberId": 602,
    "memberName": "University of North Carolina Greensboro",
    "memberTypeDescription": "Coed",
    "webSite": "https://admissions.uncg.edu/"
  },
  {
    "alternateSearchName": "VCU",
    "city": "Richmond",
    "country": "USA",
    "memberId": 603,
    "memberName": "Virginia Commonwealth University",
    "memberTypeDescription": "Coed",
    "webSite": "https://admissions.vcu.edu/apply-to-vcu/undergraduate/first-year/"
  },
  {
    "alternateSearchName": "William Paterson, WPUNJ, WPU, William Patterson, WP",
    "city": "Wayne",
    "country": "USA",
    "memberId": 604,
    "memberName": "William Paterson University of NJ",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.wpunj.edu/"
  },
  {
    "alternateSearchName": "WPU",
    "city": "Raleigh",
    "country": "USA",
    "memberId": 605,
    "memberName": "William Peace University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.peace.edu/"
  },
  {
    "alternateSearchName": "OU, Oklahoma University",
    "city": "Norman",
    "country": "USA",
    "memberId": 607,
    "memberName": "The University of Oklahoma",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.ou.edu/admissions"
  },
  {
    "alternateSearchName": "AU, AUB, study abroad, europe, aubg, AUBG",
    "city": "Blagoevgrad",
    "country": "BGR",
    "memberId": 609,
    "memberName": "American University in Bulgaria",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.aubg.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Ave Maria",
    "country": "USA",
    "memberId": 610,
    "memberName": "Ave Maria University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.avemaria.edu"
  },
  {
    "alternateSearchName": "Bard Berlin, BCB, Bard, ECLA, European College of Liberal Arts, Germany",
    "city": "Berlin",
    "country": "DEU",
    "memberId": 611,
    "memberName": "Bard College Berlin",
    "memberTypeDescription": "Coed",
    "webSite": "https://berlin.bard.edu/admissions/discover/"
  },
  {
    "alternateSearchName": "Bay Path College",
    "city": "Longmeadow",
    "country": "USA",
    "memberId": 612,
    "memberName": "Bay Path University",
    "memberTypeDescription": "Women",
    "webSite": "http://www.baypath.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Bethany",
    "country": "USA",
    "memberId": 613,
    "memberName": "Bethany College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.bethanywv.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Laurel",
    "country": "USA",
    "memberId": 615,
    "memberName": "Capitol Technology University",
    "memberTypeDescription": "Coed",
    "webSite": "https://captechu.edu/"
  },
  {
    "alternateSearchName": "Saint Elizabeth, CSE, SEU, College of Saint Elizabeth",
    "city": "Morristown",
    "country": "USA",
    "memberId": 616,
    "memberName": "Saint Elizabeth University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.steu.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Columbia",
    "country": "USA",
    "memberId": 617,
    "memberName": "Columbia College (SC)",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.columbiasc.edu/"
  },
  {
    "alternateSearchName": "DelVal, DVU",
    "city": "Doylestown",
    "country": "USA",
    "memberId": 618,
    "memberName": "Delaware Valley University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.delval.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Atlanta",
    "country": "USA",
    "memberId": 619,
    "memberName": "Georgia State University",
    "memberTypeDescription": "Coed",
    "webSite": "http://admissions.gsu.edu/how-do-i-apply/common-application/"
  },
  {
    "alternateSearchName": "HPU,High Point,High",
    "city": "High Point",
    "country": "USA",
    "memberId": 621,
    "memberName": "High Point University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.highpoint.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Union",
    "country": "USA",
    "memberId": 622,
    "memberName": "Kean University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.kean.edu/"
  },
  {
    "alternateSearchName": "La Roche College; LRU",
    "city": "Pittsburgh",
    "country": "USA",
    "memberId": 623,
    "memberName": "La Roche University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.laroche.edu/Admissions/"
  },
  {
    "alternateSearchName": "LVC, Lebanon Valley, The Valley, Annville, Lebanon Valley, Dutchmen",
    "city": "Annville",
    "country": "USA",
    "memberId": 624,
    "memberName": "Lebanon Valley College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.lvc.edu/"
  },
  {
    "alternateSearchName": "NJIT",
    "city": "Newark",
    "country": "USA",
    "memberId": 626,
    "memberName": "New Jersey Institute of Technology",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.njit.edu"
  },
  {
    "alternateSearchName": "qatar, quatar, nuqatar, NUQ, NU, study abroad, NU-Q, NW, NW Qatar, Northwestern Qatar",
    "city": "Doha",
    "country": "QAT",
    "memberId": 627,
    "memberName": "Northwestern University in Qatar",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.qatar.northwestern.edu/"
  },
  {
    "alternateSearchName": "PU, Europe, study abroad",
    "city": "Plymouth",
    "country": "GBR",
    "memberId": 628,
    "memberName": "University of Plymouth",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.plymouth.ac.uk/international"
  },
  {
    "alternateSearchName": "Roberts Wesleyan College",
    "city": "Rochester",
    "country": "USA",
    "memberId": 631,
    "memberName": "Roberts Wesleyan University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.roberts.edu"
  },
  {
    "alternateSearchName": "SCSU",
    "city": "New Haven",
    "country": "USA",
    "memberId": 632,
    "memberName": "Southern Connecticut State University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.southernct.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Springfield",
    "country": "USA",
    "memberId": 633,
    "memberName": "Springfield College",
    "memberTypeDescription": "Coed",
    "webSite": "https://springfield.edu"
  },
  {
    "alternateSearchName": "st louis college of pharmacy, st louis, saint louis college of pharmacy, stlcop, UHSP, University of Health Sciences and Pharmacy, University of Health Sciences & Pharmacy in St. Louis, St. Louis, st louis, Saint Louis, Health Sciences",
    "city": "Saint Louis",
    "country": "USA",
    "memberId": 634,
    "memberName": "University of Health Sciences and Pharmacy",
    "memberTypeDescription": "Coed",
    "webSite": "https://uhsp.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Detroit",
    "country": "USA",
    "memberId": 636,
    "memberName": "University of Detroit Mercy",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.udmercy.edu"
  },
  {
    "alternateSearchName": "UD",
    "city": "Dubuque",
    "country": "USA",
    "memberId": 637,
    "memberName": "University of Dubuque",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.dbq.edu/"
  },
  {
    "alternateSearchName": "international, study abroad, UK, Europe, UG, GU, UofG, UoG, Glasgow",
    "city": "Glasgow",
    "country": "GBR",
    "memberId": 638,
    "memberName": "University of Glasgow",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.gla.ac.uk/international/"
  },
  {
    "alternateSearchName": "",
    "city": "Pepper Pike",
    "country": "USA",
    "memberId": 640,
    "memberName": "Ursuline College",
    "memberTypeDescription": "Women",
    "webSite": "https://www.ursuline.edu/admission/undergraduate-admission/overview"
  },
  {
    "alternateSearchName": "WCSU",
    "city": "Danbury",
    "country": "USA",
    "memberId": 642,
    "memberName": "Western Connecticut State University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.wcsu.edu/"
  },
  {
    "alternateSearchName": "Western, Western State University, Western State Colorado, Colorado Western, Western State Colorado University",
    "city": "Gunnison",
    "country": "USA",
    "memberId": 643,
    "memberName": "Western Colorado University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.western.edu/"
  },
  {
    "alternateSearchName": "College of St. Benedict, College of St Benedict, Saint Ben's, St. Ben's, St Ben's, Saint Bens, St. Bens, St Bens, CSB",
    "city": "Collegeville",
    "country": "USA",
    "memberId": 644,
    "memberName": "College of Saint Benedict",
    "memberTypeDescription": "Coordinate",
    "webSite": "http://www.csbsju.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Gainesville",
    "country": "USA",
    "memberId": 651,
    "memberName": "Brenau University",
    "memberTypeDescription": "Coordinate",
    "webSite": "https://www.brenau.edu"
  },
  {
    "alternateSearchName": "CU, Capitol University, Capital University",
    "city": "Columbus",
    "country": "USA",
    "memberId": 652,
    "memberName": "Capital University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.capital.edu/"
  },
  {
    "alternateSearchName": "HC, Buffalo, Hilbert, Hamburg, Southtowns, Hawks",
    "city": "Hamburg",
    "country": "USA",
    "memberId": 653,
    "memberName": "Hilbert College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.hilbert.edu/"
  },
  {
    "alternateSearchName": "UI, UofI, U of I, Idaho, U of Idaho, UofIdaho",
    "city": "Moscow",
    "country": "USA",
    "memberId": 654,
    "memberName": "University of Idaho",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.uidaho.edu"
  },
  {
    "alternateSearchName": "study abroad, international, UL, Ireland, Europe, University of Limerick",
    "city": "University of Limerick",
    "country": "IRL",
    "memberId": 655,
    "memberName": "University of Limerick",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.ul.ie/international"
  },
  {
    "alternateSearchName": "Lourdes College",
    "city": "Sylvania",
    "country": "USA",
    "memberId": 656,
    "memberName": "Lourdes University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.lourdes.edu"
  },
  {
    "alternateSearchName": "UMFK",
    "city": "Fort Kent",
    "country": "USA",
    "memberId": 657,
    "memberName": "University of Maine at Fort Kent",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.umfk.edu/"
  },
  {
    "alternateSearchName": "McK",
    "city": "Lebanon",
    "country": "USA",
    "memberId": 658,
    "memberName": "McKendree University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.mckendree.edu/"
  },
  {
    "alternateSearchName": "MICA",
    "city": "Baltimore",
    "country": "USA",
    "memberId": 659,
    "memberName": "Maryland Institute College of Art",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.mica.edu/"
  },
  {
    "alternateSearchName": "Millikin",
    "city": "Decatur",
    "country": "USA",
    "memberId": 660,
    "memberName": "Millikin University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.millikin.edu"
  },
  {
    "alternateSearchName": "MC, michell college, mitchell",
    "city": "New London",
    "country": "USA",
    "memberId": 661,
    "memberName": "Mitchell College",
    "memberTypeDescription": "Coed",
    "webSite": "http://mitchell.edu/"
  },
  {
    "alternateSearchName": "NJCU",
    "city": "Jersey City",
    "country": "USA",
    "memberId": 663,
    "memberName": "New Jersey City University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.njcu.edu/admissions-aid/undergraduate-admissions/freshman-students"
  },
  {
    "alternateSearchName": "NSU, NSEU, Nova",
    "city": "Ft Lauderdale",
    "country": "USA",
    "memberId": 665,
    "memberName": "Nova Southeastern University",
    "memberTypeDescription": "Coed",
    "webSite": "https://undergrad.nova.edu"
  },
  {
    "alternateSearchName": "ODU",
    "city": "Norfolk",
    "country": "USA",
    "memberId": 666,
    "memberName": "Old Dominion University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.odu.edu/"
  },
  {
    "alternateSearchName": "Piedmont U, Piedmont College",
    "city": "Demorest",
    "country": "USA",
    "memberId": 668,
    "memberName": "Piedmont University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.piedmont.edu"
  },
  {
    "alternateSearchName": "University of Saint Thomas, University of St Thomas, Saint Thomas, Saint, UST, St., St,",
    "city": "Saint Paul",
    "country": "USA",
    "memberId": 671,
    "memberName": "University of St. Thomas (MN)",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.stthomas.edu/"
  },
  {
    "alternateSearchName": "TEXLUTH, TLU, TEXLUTHUNIV, TXLutheran",
    "city": "Seguin",
    "country": "USA",
    "memberId": 672,
    "memberName": "Texas Lutheran University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.tlu.edu/"
  },
  {
    "alternateSearchName": "UToledo",
    "city": "Toledo",
    "country": "USA",
    "memberId": 673,
    "memberName": "The University of Toledo",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.utoledo.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Kirksville",
    "country": "USA",
    "memberId": 674,
    "memberName": "Truman State University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.truman.edu"
  },
  {
    "alternateSearchName": "TU, Green Wave",
    "city": "New Orleans",
    "country": "USA",
    "memberId": 675,
    "memberName": "Tulane University",
    "memberTypeDescription": "Coed",
    "webSite": "https://tulane.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Detroit",
    "country": "USA",
    "memberId": 676,
    "memberName": "Wayne State University",
    "memberTypeDescription": "Coed",
    "webSite": "https://wayne.edu/"
  },
  {
    "alternateSearchName": "Wilks University, WU, Wilkes, Wilks",
    "city": "Wilkes-Barre",
    "country": "USA",
    "memberId": 677,
    "memberName": "Wilkes University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.wilkes.edu"
  },
  {
    "alternateSearchName": "WVU",
    "city": "Morgantown",
    "country": "USA",
    "memberId": 678,
    "memberName": "West Virginia University",
    "memberTypeDescription": "Coed",
    "webSite": "http://admissions.wvu.edu/"
  },
  {
    "alternateSearchName": "California College of ASU",
    "city": "Los Angeles",
    "country": "USA",
    "memberId": 680,
    "memberName": "California College of ASU",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.californiacollege.asu.edu/"
  },
  {
    "alternateSearchName": "CC, Columbia, CCIS, Columbia College Missouri",
    "city": "Columbia",
    "country": "USA",
    "memberId": 681,
    "memberName": "Columbia College Missouri",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.ccis.edu/"
  },
  {
    "alternateSearchName": "Framingham, Framingham State, Framingham State College, FSU, FSC, Framingham State University",
    "city": "Framingham",
    "country": "USA",
    "memberId": 682,
    "memberName": "Framingham State University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.framingham.edu"
  },
  {
    "alternateSearchName": "JU",
    "city": "Jacksonville",
    "country": "USA",
    "memberId": 684,
    "memberName": "Jacksonville University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.ju.edu"
  },
  {
    "alternateSearchName": "JWU, Johnson and Wales, Charlotte, Johnson, Wales, Whales, J&W, J and W",
    "city": "Charlotte",
    "country": "USA",
    "memberId": 685,
    "memberName": "Johnson & Wales University-Charlotte",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.jwu.edu/campuses/charlotte/index.html"
  },
  {
    "alternateSearchName": "JWU, Johnson and Wales, Providence, Johnson, Wales, Whales, J&W, J and W",
    "city": "Providence",
    "country": "USA",
    "memberId": 688,
    "memberName": "Johnson & Wales University-Providence",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.jwu.edu/campuses/providence/index.html"
  },
  {
    "alternateSearchName": "",
    "city": "Monmouth",
    "country": "USA",
    "memberId": 690,
    "memberName": "Monmouth College (IL)",
    "memberTypeDescription": "Coed",
    "webSite": "http://monmouthcollege.edu/admissions/"
  },
  {
    "alternateSearchName": "ONU, Ohio Northern",
    "city": "Ada",
    "country": "USA",
    "memberId": 691,
    "memberName": "Ohio Northern University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.onu.edu/"
  },
  {
    "alternateSearchName": "PLNU, Point Loma",
    "city": "San Diego",
    "country": "USA",
    "memberId": 692,
    "memberName": "Point Loma Nazarene University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.pointloma.edu/undergraduate"
  },
  {
    "alternateSearchName": "QU, Charlotte, QUC, Queens University, Queens College, Queen University, QUoC, Queens",
    "city": "Charlotte",
    "country": "USA",
    "memberId": 693,
    "memberName": "Queens University of Charlotte",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.queens.edu/"
  },
  {
    "alternateSearchName": "RMU, Pittsburgh",
    "city": "Moon Twp",
    "country": "USA",
    "memberId": 694,
    "memberName": "Robert Morris University (PA)",
    "memberTypeDescription": "Coed",
    "webSite": "http://rmu.edu/admissions"
  },
  {
    "alternateSearchName": "St. Mary, Saint Mary of the Woods College, Saint Mary's, St. Mary's, SMWC",
    "city": "Saint Mary of the Woods",
    "country": "USA",
    "memberId": 695,
    "memberName": "Saint Mary-of-the-Woods College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.smwc.edu/admission"
  },
  {
    "alternateSearchName": "SAU",
    "city": "Spring Arbor",
    "country": "USA",
    "memberId": 696,
    "memberName": "Spring Arbor University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.arbor.edu/"
  },
  {
    "alternateSearchName": "UIC, Asia, study abroad, South Korea, Korea, international",
    "city": "Seoul",
    "country": "KOR",
    "memberId": 697,
    "memberName": "Underwood International College, Yonsei University",
    "memberTypeDescription": "Coed",
    "webSite": "http://uic.yonsei.ac.kr"
  },
  {
    "alternateSearchName": "JI, asia, study abroad, international, Joint Institute, University of Michigan, Shanghai Jiao Tong University, UMJI, UMSJTU, UM-SJTU, SJTU",
    "city": "Shanghai",
    "country": "CHN",
    "memberId": 699,
    "memberName": "University of Michigan - Shanghai Jiao Tong University Joint Institute",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.ji.sjtu.edu.cn/"
  },
  {
    "alternateSearchName": "USM, Southern Miss, Hattiesburg",
    "city": "Hattiesburg",
    "country": "USA",
    "memberId": 700,
    "memberName": "University of Southern Mississippi",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.usm.edu/"
  },
  {
    "alternateSearchName": "WU, Bulldogs,",
    "city": "Wilberforce",
    "country": "USA",
    "memberId": 705,
    "memberName": "Wilberforce University",
    "memberTypeDescription": "Coed",
    "webSite": "http://wilberforce.edu/"
  },
  {
    "alternateSearchName": "UIndy",
    "city": "Indianapolis",
    "country": "USA",
    "memberId": 706,
    "memberName": "University of Indianapolis",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.uindy.edu/"
  },
  {
    "alternateSearchName": "SUNY, SUNY Canton, Canton SUNY, SUNY at Canton",
    "city": "Canton",
    "country": "USA",
    "memberId": 707,
    "memberName": "SUNY College of Technology at Canton",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.canton.edu/"
  },
  {
    "alternateSearchName": "Alfred",
    "city": "Alfred",
    "country": "USA",
    "memberId": 708,
    "memberName": "SUNY Alfred State College of Technology",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.alfredstate.edu"
  },
  {
    "alternateSearchName": "SUNY, Farmindale",
    "city": "Farmingdale",
    "country": "USA",
    "memberId": 709,
    "memberName": "SUNY Farmingdale State College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.farmingdale.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Canton",
    "country": "USA",
    "memberId": 710,
    "memberName": "Malone University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.malone.edu/"
  },
  {
    "alternateSearchName": "CSU, Baltimore, Fanny Jackson, Fannie Jackson",
    "city": "Baltimore",
    "country": "USA",
    "memberId": 711,
    "memberName": "Coppin State University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.coppin.edu/"
  },
  {
    "alternateSearchName": "MU, Millersville, Ville",
    "city": "Millersville",
    "country": "USA",
    "memberId": 712,
    "memberName": "Millersville University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.millersville.edu/"
  },
  {
    "alternateSearchName": "CAU",
    "city": "Atlanta",
    "country": "USA",
    "memberId": 713,
    "memberName": "Clark Atlanta University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.cau.edu/"
  },
  {
    "alternateSearchName": "MMA, Maritime, UMAINE, Mariners, Maine Maritime, Maine",
    "city": "Castine",
    "country": "USA",
    "memberId": 714,
    "memberName": "Maine Maritime Academy",
    "memberTypeDescription": "Coed",
    "webSite": "http://mainemaritime.edu"
  },
  {
    "alternateSearchName": "ZC",
    "city": "Berkeley",
    "country": "USA",
    "memberId": 715,
    "memberName": "Zaytuna College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.zaytuna.edu"
  },
  {
    "alternateSearchName": "cobble, cobel",
    "city": "Cobleskill",
    "country": "USA",
    "memberId": 716,
    "memberName": "SUNY Cobleskill",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.cobleskill.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Houghton",
    "country": "USA",
    "memberId": 717,
    "memberName": "Houghton University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.houghton.edu/"
  },
  {
    "alternateSearchName": "ou, OU, Ohiou, OhioU, OHIO",
    "city": "Athens",
    "country": "USA",
    "memberId": 718,
    "memberName": "Ohio University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.ohio.edu/"
  },
  {
    "alternateSearchName": "SUNY, Morrisville State College, MSC",
    "city": "Morrisville",
    "country": "USA",
    "memberId": 719,
    "memberName": "SUNY Morrisville State College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.morrisville.edu/"
  },
  {
    "alternateSearchName": "St. John's university, Saint John's university, SJU, St John's university, St Johns, New York, St. Johns University, St. John's University, Saint, St Johns, Saint Johns, Saint John's",
    "city": "Queens",
    "country": "USA",
    "memberId": 720,
    "memberName": "St. John's University (NY)",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.stjohns.edu/"
  },
  {
    "alternateSearchName": "NCSU, NC State, NC State University",
    "city": "Raleigh",
    "country": "USA",
    "memberId": 721,
    "memberName": "North Carolina State University",
    "memberTypeDescription": "Coed",
    "webSite": "https://admissions.ncsu.edu"
  },
  {
    "alternateSearchName": "Barry",
    "city": "Miami Shores",
    "country": "USA",
    "memberId": 722,
    "memberName": "Barry University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.barry.edu"
  },
  {
    "alternateSearchName": "SUNY, State University of New York, Delhi University",
    "city": "Delhi",
    "country": "USA",
    "memberId": 723,
    "memberName": "SUNY Delhi",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.delhi.edu/"
  },
  {
    "alternateSearchName": "CCAD",
    "city": "Columbus",
    "country": "USA",
    "memberId": 724,
    "memberName": "Columbus College of Art & Design",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.ccad.edu/"
  },
  {
    "alternateSearchName": "Rivier College",
    "city": "Nashua",
    "country": "USA",
    "memberId": 726,
    "memberName": "Rivier University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.rivier.edu"
  },
  {
    "alternateSearchName": "PC, Prin",
    "city": "Elsah",
    "country": "USA",
    "memberId": 729,
    "memberName": "Principia College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.principiacollege.edu/"
  },
  {
    "alternateSearchName": "LC, Lyon College",
    "city": "Batesville",
    "country": "USA",
    "memberId": 732,
    "memberName": "Lyon College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.lyon.edu/"
  },
  {
    "alternateSearchName": "NWU",
    "city": "Lincoln",
    "country": "USA",
    "memberId": 734,
    "memberName": "Nebraska Wesleyan University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.nebrwesleyan.edu"
  },
  {
    "alternateSearchName": "SCAD, The Savannah College of Art and Design",
    "city": "Savannah",
    "country": "USA",
    "memberId": 735,
    "memberName": "Savannah College of Art and Design",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.scad.edu/admission/admission-information"
  },
  {
    "alternateSearchName": "GC, GCSU, GC&SU, Georgia College & State University",
    "city": "Milledgeville",
    "country": "USA",
    "memberId": 736,
    "memberName": "Georgia College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.gcsu.edu/admissions/first-year"
  },
  {
    "alternateSearchName": "UNT",
    "city": "Denton",
    "country": "USA",
    "memberId": 737,
    "memberName": "University of North Texas",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.unt.edu/"
  },
  {
    "alternateSearchName": "UEL",
    "city": "LONDON",
    "country": "GBR",
    "memberId": 738,
    "memberName": "University of East London",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.uel.ac.uk/"
  },
  {
    "alternateSearchName": "UWL, West London",
    "city": "London",
    "country": "GBR",
    "memberId": 739,
    "memberName": "University of West London",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.uwl.ac.uk/"
  },
  {
    "alternateSearchName": "IUB, Indiana University-Bloomington, IU",
    "city": "Bloomington",
    "country": "USA",
    "memberId": 741,
    "memberName": "Indiana University Bloomington",
    "memberTypeDescription": "Coed",
    "webSite": "https://admissions.indiana.edu"
  },
  {
    "alternateSearchName": "GMU, Mason",
    "city": "Fairfax",
    "country": "USA",
    "memberId": 742,
    "memberName": "George Mason University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www2.gmu.edu/admissions-aid"
  },
  {
    "alternateSearchName": "BU",
    "city": "Waco",
    "country": "USA",
    "memberId": 744,
    "memberName": "Baylor University",
    "memberTypeDescription": "Coed",
    "webSite": "https://admissions.web.baylor.edu/"
  },
  {
    "alternateSearchName": "BGSU",
    "city": "Bowling Green",
    "country": "USA",
    "memberId": 745,
    "memberName": "Bowling Green State University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.bgsu.edu/admissions"
  },
  {
    "alternateSearchName": "The University of Akron",
    "city": "Akron",
    "country": "USA",
    "memberId": 746,
    "memberName": "University of Akron",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.uakron.edu/"
  },
  {
    "alternateSearchName": "UW, UWM, UW Madison, The University of Wisconsin",
    "city": "Madison",
    "country": "USA",
    "memberId": 747,
    "memberName": "University of Wisconsin-Madison",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.wisc.edu/"
  },
  {
    "alternateSearchName": "MTSU",
    "city": "Murfreesboro",
    "country": "USA",
    "memberId": 748,
    "memberName": "Middle Tennessee State University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.mtsu.edu"
  },
  {
    "alternateSearchName": "Alvernia College, The Vern",
    "city": "Reading",
    "country": "USA",
    "memberId": 756,
    "memberName": "Alvernia University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.alvernia.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Yellow Springs",
    "country": "USA",
    "memberId": 757,
    "memberName": "Antioch College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.antiochcollege.edu"
  },
  {
    "alternateSearchName": "Simon's Rock",
    "city": "Great Barrington",
    "country": "USA",
    "memberId": 759,
    "memberName": "Bard College at Simon's Rock",
    "memberTypeDescription": "Coed",
    "webSite": "https://simons-rock.edu/admission"
  },
  {
    "alternateSearchName": "Benedictine, B.C., Atchison",
    "city": "Atchison",
    "country": "USA",
    "memberId": 760,
    "memberName": "Benedictine College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.benedictine.edu/apply"
  },
  {
    "alternateSearchName": "Benedictine Mesa, BenU",
    "city": "Lisle",
    "country": "USA",
    "memberId": 761,
    "memberName": "Benedictine University ",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.ben.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Sherbrooke",
    "country": "CAN",
    "memberId": 762,
    "memberName": "Bishop's University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.ubishops.ca"
  },
  {
    "alternateSearchName": "",
    "city": "Kenosha",
    "country": "USA",
    "memberId": 763,
    "memberName": "Carthage College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.carthage.edu/admissions/"
  },
  {
    "alternateSearchName": "",
    "city": "Moorhead",
    "country": "USA",
    "memberId": 764,
    "memberName": "Concordia College at Moorhead",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.concordiacollege.edu/"
  },
  {
    "alternateSearchName": "Dyouville",
    "city": "Buffalo",
    "country": "USA",
    "memberId": 765,
    "memberName": "D'Youville University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.dyu.edu"
  },
  {
    "alternateSearchName": "Dean",
    "city": "Franklin",
    "country": "USA",
    "memberId": 766,
    "memberName": "Dean College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.dean.edu/admissions.aspx"
  },
  {
    "alternateSearchName": "ILA",
    "city": "Kyoto",
    "country": "JPN",
    "memberId": 767,
    "memberName": "Doshisha University, The Institute for the Liberal Arts",
    "memberTypeDescription": "Coed",
    "webSite": "https://ila.doshisha.ac.jp/en/"
  },
  {
    "alternateSearchName": "",
    "city": "Madison",
    "country": "USA",
    "memberId": 768,
    "memberName": "Edgewood College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.edgewood.edu"
  },
  {
    "alternateSearchName": "Madrid,IE,Segovia,Spain",
    "city": "Segovia",
    "country": "ESP",
    "memberId": 770,
    "memberName": "IE University - Segovia Campus",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.ie.edu/university"
  },
  {
    "alternateSearchName": "Flagship",
    "city": "West Palm Beach",
    "country": "USA",
    "memberId": 771,
    "memberName": "Keiser University Flagship Campus - West Palm Beach Florida",
    "memberTypeDescription": "Coed",
    "webSite": "https://residential.keiseruniversity.edu/"
  },
  {
    "alternateSearchName": "Kentucky Wesleyan, KWC, Ky Wesleyan, Kentucky Wesleyan College, Wesleyan, Kentucky",
    "city": "Owensboro",
    "country": "USA",
    "memberId": 772,
    "memberName": "Kentucky Wesleyan College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.kwc.edu"
  },
  {
    "alternateSearchName": "MassArt, Mass Art, Mass College of Art, Mass College of Art and Design, Massachusetts College of Art, UMassArt, MCAD",
    "city": "Boston",
    "country": "USA",
    "memberId": 775,
    "memberName": "Massachusetts College of Art and Design",
    "memberTypeDescription": "Coed",
    "webSite": "https://massart.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Nampa",
    "country": "USA",
    "memberId": 776,
    "memberName": "Northwest Nazarene University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.nnu.edu"
  },
  {
    "alternateSearchName": "Paul Smiths College, Paul Smiths, PSC",
    "city": "Paul Smiths",
    "country": "USA",
    "memberId": 777,
    "memberName": "Paul Smith's College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.paulsmiths.edu/admissions/"
  },
  {
    "alternateSearchName": "CIA",
    "city": "Hyde Park",
    "country": "USA",
    "memberId": 779,
    "memberName": "The Culinary Institute of America (NY)",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.ciachef.edu"
  },
  {
    "alternateSearchName": "",
    "city": "New York",
    "country": "USA",
    "memberId": 780,
    "memberName": "New York School of Career & Applied Studies of Touro College & University System",
    "memberTypeDescription": "Coed",
    "webSite": "http://nyscas.touro.edu/admissions--aid/"
  },
  {
    "alternateSearchName": "UAB",
    "city": "Birmingham",
    "country": "USA",
    "memberId": 781,
    "memberName": "University of Alabama at Birmingham (UAB)",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.uab.edu/admissions/"
  },
  {
    "alternateSearchName": "",
    "city": "Worcester",
    "country": "GBR",
    "memberId": 785,
    "memberName": "University of Worcester (UK)",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.worcester.ac.uk/"
  },
  {
    "alternateSearchName": "WIU",
    "city": "Macomb",
    "country": "USA",
    "memberId": 786,
    "memberName": "Western Illinois University",
    "memberTypeDescription": "Coed",
    "webSite": "http://wiu.edu/admissions/"
  },
  {
    "alternateSearchName": "Hastings",
    "city": "Hastings",
    "country": "USA",
    "memberId": 787,
    "memberName": "Hastings College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.hastings.edu/"
  },
  {
    "alternateSearchName": "Charles, CDU, Drew, Charles Drew, Charles R. Drew",
    "city": "Los Angeles",
    "country": "USA",
    "memberId": 788,
    "memberName": "Charles R. Drew University of Medicine and Science",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.cdrewu.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Chicago",
    "country": "USA",
    "memberId": 789,
    "memberName": "North Park University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.northpark.edu/Admissions/Undergraduate-Admissions"
  },
  {
    "alternateSearchName": "CUC, CUChicago, Concordia-Chicago, Concordia Chicago, Concordia River Forest, Concordia IL, Concordia Illinois",
    "city": "River Forest",
    "country": "USA",
    "memberId": 790,
    "memberName": "Concordia University Chicago",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.cuchicago.edu/admission-aid/"
  },
  {
    "alternateSearchName": "St Andrews",
    "city": "Laurinburg",
    "country": "USA",
    "memberId": 791,
    "memberName": "St. Andrews University (NC)",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.sa.edu/admissions"
  },
  {
    "alternateSearchName": "CIA",
    "city": "St. Helena",
    "country": "USA",
    "memberId": 793,
    "memberName": "The Culinary Institute of America (CA)",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.ciachef.edu/admissions/"
  },
  {
    "alternateSearchName": "CIA",
    "city": "San Antonio",
    "country": "USA",
    "memberId": 794,
    "memberName": "The Culinary Institute of America (TX)",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.ciachef.edu/"
  },
  {
    "alternateSearchName": "SLU SLU-Madrid",
    "city": "Madrid",
    "country": "ESP",
    "memberId": 795,
    "memberName": "Saint Louis University - Madrid Campus (Spain)",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.slu.edu/madrid"
  },
  {
    "alternateSearchName": "UB, Bridgeport, BU, Bridgeport University",
    "city": "Bridgeport",
    "country": "USA",
    "memberId": 796,
    "memberName": "University of Bridgeport",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.bridgeport.edu"
  },
  {
    "alternateSearchName": "IPFW, IUPUFW, Indiana University Purdue University Fort Wayne, Indiana Purdue Fort Wayne, IUPUIFW, IU Fort Wayne, PU Fort Wayne, Purdue Fort Wayne, IFPW, Indiana University Fort Wayne, Purdue University Fort Wayne, Fort Wayne University",
    "city": "Fort Wayne",
    "country": "USA",
    "memberId": 798,
    "memberName": "Purdue University Fort Wayne",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.pfw.edu"
  },
  {
    "alternateSearchName": "Stephens",
    "city": "Columbia",
    "country": "USA",
    "memberId": 799,
    "memberName": "Stephens College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.stephens.edu/admissions-and-aid/"
  },
  {
    "alternateSearchName": "Music,Conservatory of Music,Oberlin College",
    "city": "Oberlin",
    "country": "USA",
    "memberId": 803,
    "memberName": "Oberlin Conservatory of Music",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.oberlin.edu/conservatory"
  },
  {
    "alternateSearchName": "Minerva",
    "city": "San Francisco",
    "country": "USA",
    "memberId": 804,
    "memberName": "Minerva University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.minerva.edu/"
  },
  {
    "alternateSearchName": "Albertus",
    "city": "New Haven",
    "country": "USA",
    "memberId": 805,
    "memberName": "Albertus Magnus College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.albertus.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Northfield",
    "country": "USA",
    "memberId": 807,
    "memberName": "Norwich University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.norwich.edu/"
  },
  {
    "alternateSearchName": "University of Michigan-Flint, UM-Flint, U of M Flint, UM Flint",
    "city": "Flint",
    "country": "USA",
    "memberId": 808,
    "memberName": "University of Michigan-Flint",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.umflint.edu/admissions/"
  },
  {
    "alternateSearchName": "CUW, Concordia Wisconsin",
    "city": "Mequon",
    "country": "USA",
    "memberId": 809,
    "memberName": "Concordia University Wisconsin",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.cuw.edu"
  },
  {
    "alternateSearchName": "UCF",
    "city": "Orlando",
    "country": "USA",
    "memberId": 810,
    "memberName": "University of Central Florida",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.ucf.edu/"
  },
  {
    "alternateSearchName": "University of Wisconsin",
    "city": "Stevens Point",
    "country": "USA",
    "memberId": 812,
    "memberName": "University of Wisconsin-Stevens Point",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.uwsp.edu/Pages/default.aspx"
  },
  {
    "alternateSearchName": "Lynchburg, Lynchburg College, LC, UL, Lynchburg University",
    "city": "Lynchburg",
    "country": "USA",
    "memberId": 813,
    "memberName": "University of Lynchburg",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.lynchburg.edu/"
  },
  {
    "alternateSearchName": "St. Ambrose, Saint Ambrose, St Ambrose, SAU",
    "city": "Davenport",
    "country": "USA",
    "memberId": 815,
    "memberName": "St. Ambrose University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.sau.edu"
  },
  {
    "alternateSearchName": "UMN UMTC",
    "city": "Minneapolis",
    "country": "USA",
    "memberId": 816,
    "memberName": "University of Minnesota Twin Cities",
    "memberTypeDescription": "Coed",
    "webSite": "http://admissions.tc.umn.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Cedar Falls",
    "country": "USA",
    "memberId": 817,
    "memberName": "University of Northern Iowa",
    "memberTypeDescription": "Coed",
    "webSite": "https://admissions.uni.edu/"
  },
  {
    "alternateSearchName": "STU, stu, st thomas, saint thomas, st thomas university saint thomas university, canada, new brunswick",
    "city": "Fredericton",
    "country": "CAN",
    "memberId": 818,
    "memberName": "St. Thomas University, Canada",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.stu.ca/"
  },
  {
    "alternateSearchName": "MIC",
    "city": "Limerick",
    "country": "IRL",
    "memberId": 819,
    "memberName": "Mary Immaculate College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.mic.ul.ie/international/study-in-ireland/undergraduate"
  },
  {
    "alternateSearchName": "West, VA, West Virginia, Virginia, Wesleyan",
    "city": "Buckhannon",
    "country": "USA",
    "memberId": 823,
    "memberName": "West Virginia Wesleyan College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.wvwc.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Aston",
    "country": "USA",
    "memberId": 824,
    "memberName": "Neumann University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.neumann.edu"
  },
  {
    "alternateSearchName": "FC",
    "city": "Franklin",
    "country": "USA",
    "memberId": 825,
    "memberName": "Franklin College",
    "memberTypeDescription": "Coed",
    "webSite": "https://franklincollege.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Brevard",
    "country": "USA",
    "memberId": 826,
    "memberName": "Brevard College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.brevard.edu"
  },
  {
    "alternateSearchName": "NEIT, New England Tech, NE Tech",
    "city": "East Greenwich",
    "country": "USA",
    "memberId": 827,
    "memberName": "New England Institute of Technology",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.neit.edu"
  },
  {
    "alternateSearchName": "UMD",
    "city": "Duluth",
    "country": "USA",
    "memberId": 828,
    "memberName": "University of Minnesota Duluth",
    "memberTypeDescription": "Coed",
    "webSite": "http://d.umn.edu/admissions"
  },
  {
    "alternateSearchName": "",
    "city": "Chester",
    "country": "USA",
    "memberId": 829,
    "memberName": "Widener University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.widener.edu/admissions-aid/undergraduate-admissions"
  },
  {
    "alternateSearchName": "UMR, Rochester",
    "city": "Rochester",
    "country": "USA",
    "memberId": 831,
    "memberName": "University of Minnesota Rochester",
    "memberTypeDescription": "Coed",
    "webSite": "http://r.umn.edu"
  },
  {
    "alternateSearchName": "",
    "city": "New Orleans",
    "country": "USA",
    "memberId": 833,
    "memberName": "Dillard University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.dillard.edu/"
  },
  {
    "alternateSearchName": "St Francis, Saint Francis",
    "city": "Joliet",
    "country": "USA",
    "memberId": 835,
    "memberName": "University of St. Francis (IL)",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.stfrancis.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "San Juan",
    "country": "USA",
    "memberId": 836,
    "memberName": "Universidad del Sagrado Corazon",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.sagrado.edu/en/admisiones/"
  },
  {
    "alternateSearchName": "Melbourne, Australia, MUA",
    "city": "Melbourne",
    "country": "AUS",
    "memberId": 846,
    "memberName": "Monash University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.monash.edu/"
  },
  {
    "alternateSearchName": "Wheaton College (IL), Wheaton, Wheaton College, Wheaton College IL, Wheaton College Illinois, Wheaton College (Illinois)",
    "city": "Wheaton",
    "country": "USA",
    "memberId": 847,
    "memberName": "Wheaton College (IL)",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.wheaton.edu"
  },
  {
    "alternateSearchName": "Art Academy, AAC",
    "city": "Cincinnati",
    "country": "USA",
    "memberId": 848,
    "memberName": "Art Academy of Cincinnati",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.artacademy.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Salisbury",
    "country": "USA",
    "memberId": 849,
    "memberName": "Catawba College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.catawba.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Orangeburg",
    "country": "USA",
    "memberId": 850,
    "memberName": "Dominican University New York",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.duny.edu"
  },
  {
    "alternateSearchName": "ECU",
    "city": "Greenville",
    "country": "USA",
    "memberId": 851,
    "memberName": "East Carolina University",
    "memberTypeDescription": "Coed",
    "webSite": "https://admissions.ecu.edu/"
  },
  {
    "alternateSearchName": "UNLV",
    "city": "Las Vegas",
    "country": "USA",
    "memberId": 852,
    "memberName": "University of Nevada, Las Vegas (UNLV)",
    "memberTypeDescription": "Coed",
    "webSite": "http://unlv.edu"
  },
  {
    "alternateSearchName": "EMU",
    "city": "Harrisonburg",
    "country": "USA",
    "memberId": 853,
    "memberName": "Eastern Mennonite University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.emu.edu"
  },
  {
    "alternateSearchName": "App State, AppState",
    "city": "Boone",
    "country": "USA",
    "memberId": 854,
    "memberName": "Appalachian State University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.appstate.edu/"
  },
  {
    "alternateSearchName": "Barton",
    "city": "Wilson",
    "country": "USA",
    "memberId": 855,
    "memberName": "Barton College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.barton.edu"
  },
  {
    "alternateSearchName": "CSU",
    "city": "Cleveland",
    "country": "USA",
    "memberId": 856,
    "memberName": "Cleveland State University",
    "memberTypeDescription": "Coed",
    "webSite": "https://engagecsu.com/"
  },
  {
    "alternateSearchName": "",
    "city": "Defiance",
    "country": "USA",
    "memberId": 857,
    "memberName": "Defiance College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.defiance.edu"
  },
  {
    "alternateSearchName": "DKU",
    "city": "Kunshan",
    "country": "CHN",
    "memberId": 858,
    "memberName": "Duke Kunshan University",
    "memberTypeDescription": "Coed",
    "webSite": "https://admissions.dukekunshan.edu.cn/en/"
  },
  {
    "alternateSearchName": "FDU, Fairleigh, FD, Metropolitan, Florham",
    "city": "Teaneck",
    "country": "USA",
    "memberId": 859,
    "memberName": "Fairleigh Dickinson University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.fdu.edu"
  },
  {
    "alternateSearchName": "Florida Poly",
    "city": "Lakeland",
    "country": "USA",
    "memberId": 860,
    "memberName": "Florida Polytechnic University",
    "memberTypeDescription": "Coed",
    "webSite": "https://floridapoly.edu/"
  },
  {
    "alternateSearchName": "Hellenic College, HCHC",
    "city": "Brookline",
    "country": "USA",
    "memberId": 861,
    "memberName": "Hellenic College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.hchc.edu/"
  },
  {
    "alternateSearchName": "Kent, KSU, Kent State",
    "city": "Kent",
    "country": "USA",
    "memberId": 862,
    "memberName": "Kent State University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.kent.edu"
  },
  {
    "alternateSearchName": "LMU LMUNET",
    "city": "Harrogate",
    "country": "USA",
    "memberId": 863,
    "memberName": "Lincoln Memorial University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.lmunet.edu"
  },
  {
    "alternateSearchName": "Marshall Marshall U Marshall Univ MU",
    "city": "Huntington",
    "country": "USA",
    "memberId": 864,
    "memberName": "Marshall University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.marshall.edu"
  },
  {
    "alternateSearchName": "RHIT, Rose, Rose Hulman, Rosehulman, RoseHulman, Rose-Hulman",
    "city": "Terre Haute",
    "country": "USA",
    "memberId": 865,
    "memberName": "Rose-Hulman Institute of Technology",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.rose-hulman.edu"
  },
  {
    "alternateSearchName": "SoCal, Architecture, Sciarc, SCI-Arc,",
    "city": "Los Angeles",
    "country": "USA",
    "memberId": 866,
    "memberName": "Southern California Institute of Architecture",
    "memberTypeDescription": "Coed",
    "webSite": "https://sciarc.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Angola",
    "country": "USA",
    "memberId": 868,
    "memberName": "Trine University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.trine.edu"
  },
  {
    "alternateSearchName": "UC3M",
    "city": "Getafe",
    "country": "ESP",
    "memberId": 870,
    "memberName": "Universidad Carlos III de Madrid",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.uc3m.es/home"
  },
  {
    "alternateSearchName": "Houston, UofH, U of H, UH, The University of Houston",
    "city": "Houston",
    "country": "USA",
    "memberId": 871,
    "memberName": "University of Houston",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.uh.edu"
  },
  {
    "alternateSearchName": "UMM",
    "city": "Morris",
    "country": "USA",
    "memberId": 872,
    "memberName": "University of Minnesota Morris",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.morris.umn.edu"
  },
  {
    "alternateSearchName": "UNC, UNCo, Northern Colorado, Colorado, unco, unc, UNCO",
    "city": "Greeley",
    "country": "USA",
    "memberId": 873,
    "memberName": "University of Northern Colorado",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.unco.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Eugene",
    "country": "USA",
    "memberId": 874,
    "memberName": "University of Oregon",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.uoregon.edu"
  },
  {
    "alternateSearchName": "Uwest University of the West",
    "city": "Rosemead",
    "country": "USA",
    "memberId": 875,
    "memberName": "University of the West",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.uwest.edu"
  },
  {
    "alternateSearchName": "UW, WYO, UWYO",
    "city": "Laramie",
    "country": "USA",
    "memberId": 876,
    "memberName": "University of Wyoming",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.uwyo.edu/admissions/"
  },
  {
    "alternateSearchName": "WMU, wmich, western, western Michigan",
    "city": "Kalamazoo",
    "country": "USA",
    "memberId": 878,
    "memberName": "Western Michigan University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.wmich.edu"
  },
  {
    "alternateSearchName": "YCP",
    "city": "York",
    "country": "USA",
    "memberId": 879,
    "memberName": "York College of Pennsylvania",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.ycp.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Ar-Rayyan",
    "country": "QAT",
    "memberId": 880,
    "memberName": "Carnegie Mellon University in Qatar",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.qatar.cmu.edu/"
  },
  {
    "alternateSearchName": "Mizzou",
    "city": "Columbia",
    "country": "USA",
    "memberId": 881,
    "memberName": "University of Missouri",
    "memberTypeDescription": "Coed",
    "webSite": "http://missouri.edu/"
  },
  {
    "alternateSearchName": "MST, Missouri S&T",
    "city": "Rolla",
    "country": "USA",
    "memberId": 882,
    "memberName": "Missouri University of Science and Technology",
    "memberTypeDescription": "Coed",
    "webSite": "http://mst.edu"
  },
  {
    "alternateSearchName": "UMKC, University of Missouri",
    "city": "Kansas City",
    "country": "USA",
    "memberId": 883,
    "memberName": "University of Missouri-Kansas City",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.umkc.edu"
  },
  {
    "alternateSearchName": "University of Missouri St. Louis, UMSL, University of Missouri-St. Louis, University of Missouri-St Louis, University of Missouri-Saint Louis, Univ of Missouri-St. Louis, University of MO-St. Louis, University of Nissouri Saint Louis, Univ of Mo St. Loui...",
    "city": "Saint Louis",
    "country": "USA",
    "memberId": 884,
    "memberName": "University of Missouri-St Louis",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.umsl.edu"
  },
  {
    "alternateSearchName": "AU, Anderson, Indiana, Christian",
    "city": "Anderson",
    "country": "USA",
    "memberId": 885,
    "memberName": "Anderson University (IN)",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.anderson.edu"
  },
  {
    "alternateSearchName": "UA, U of A",
    "city": "Tucson",
    "country": "USA",
    "memberId": 886,
    "memberName": "The University of Arizona",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.arizona.edu"
  },
  {
    "alternateSearchName": "UCD Ireland UCD Dublin University of Dublin UCD Dublin",
    "city": "Dublin 4",
    "country": "IRL",
    "memberId": 887,
    "memberName": "University College Dublin",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.ucd.ie/global"
  },
  {
    "alternateSearchName": "",
    "city": "Mobile",
    "country": "USA",
    "memberId": 889,
    "memberName": "The University of South Alabama",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.southalabama.edu"
  },
  {
    "alternateSearchName": "St. Scholastica Scholastica Saint Scholastica The College of St. Scholastica The College of Saint Scholastica CSS",
    "city": "Duluth",
    "country": "USA",
    "memberId": 890,
    "memberName": "The College of St. Scholastica",
    "memberTypeDescription": "Coed",
    "webSite": "http://css.edu"
  },
  {
    "alternateSearchName": "LSU,LSUAM,Louisiana State University",
    "city": "Baton Rouge",
    "country": "USA",
    "memberId": 891,
    "memberName": "Louisiana State University A&M-Baton Rouge",
    "memberTypeDescription": "Coed",
    "webSite": "http://lsu.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Kingston",
    "country": "CAN",
    "memberId": 892,
    "memberName": "Queen's University, Canada",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.queensu.ca/"
  },
  {
    "alternateSearchName": "Northwest Christian University, NWCU, NCU, Bushnell University",
    "city": "Eugene",
    "country": "USA",
    "memberId": 893,
    "memberName": "Bushnell University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.bushnell.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Tuskegee",
    "country": "USA",
    "memberId": 894,
    "memberName": "Tuskegee University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.tuskegee.edu/"
  },
  {
    "alternateSearchName": "TU, Tiffin",
    "city": "Tiffin",
    "country": "USA",
    "memberId": 895,
    "memberName": "Tiffin University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.tiffin.edu"
  },
  {
    "alternateSearchName": "St. Francis, USF",
    "city": "Fort Wayne",
    "country": "USA",
    "memberId": 896,
    "memberName": "University of Saint Francis-Fort Wayne Indiana",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.sf.edu"
  },
  {
    "alternateSearchName": "Ashland",
    "city": "Ashland",
    "country": "USA",
    "memberId": 897,
    "memberName": "Ashland University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.ashland.edu/"
  },
  {
    "alternateSearchName": "Otis",
    "city": "Los Angeles",
    "country": "USA",
    "memberId": 898,
    "memberName": "Otis College of Art and Design",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.otis.edu"
  },
  {
    "alternateSearchName": "EHL, Ecole hôtelière de Lausanne (EHL)",
    "city": "LAUSANNE",
    "country": "CHE",
    "memberId": 899,
    "memberName": "EHL Hospitality Business School",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.ehl.edu/"
  },
  {
    "alternateSearchName": "BUL",
    "city": "Uxbridge",
    "country": "GBR",
    "memberId": 900,
    "memberName": "Brunel University London",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.brunel.ac.uk/"
  },
  {
    "alternateSearchName": "ASU",
    "city": "Tempe",
    "country": "USA",
    "memberId": 901,
    "memberName": "Arizona State University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.asu.edu/"
  },
  {
    "alternateSearchName": "UNF",
    "city": "Jacksonville",
    "country": "USA",
    "memberId": 902,
    "memberName": "University of North Florida",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.unf.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Philadelphia",
    "country": "USA",
    "memberId": 903,
    "memberName": "Moore College of Art and Design",
    "memberTypeDescription": "Women",
    "webSite": "http://moore.edu/"
  },
  {
    "alternateSearchName": "ESCP Europe",
    "city": "London",
    "country": "GBR",
    "memberId": 905,
    "memberName": "ESCP Business School",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.escp.eu/programmes/bachelor"
  },
  {
    "alternateSearchName": "",
    "city": "Guelph",
    "country": "CAN",
    "memberId": 906,
    "memberName": "University of Guelph",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.uoguelph.ca"
  },
  {
    "alternateSearchName": "HCC",
    "city": "Notre Dame",
    "country": "USA",
    "memberId": 908,
    "memberName": "Holy Cross College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.hcc-nd.edu"
  },
  {
    "alternateSearchName": "UNL, NU, UN",
    "city": "Lincoln",
    "country": "USA",
    "memberId": 909,
    "memberName": "University of Nebraska-Lincoln",
    "memberTypeDescription": "Coed",
    "webSite": "http://admissions.unl.edu"
  },
  {
    "alternateSearchName": "AMDA, The American Musical and Dramatic Academy, AMDA College and Conservatory of the Performing Arts",
    "city": "New York",
    "country": "USA",
    "memberId": 914,
    "memberName": "AMDA The American Musical and Dramatic Academy",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.amda.edu"
  },
  {
    "alternateSearchName": "AMDA, AMDA College of the Performing Arts, AMDA College and Conservatory of the Performing Arts, The American Musical and Dramatic Academy",
    "city": "Los Angeles",
    "country": "USA",
    "memberId": 915,
    "memberName": "AMDA College of the Performing Arts",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.amda.edu"
  },
  {
    "alternateSearchName": "MECA, Maine College of Art & Design, meca, MECA&D, meca&D, maine college of art, maine college of art and design, maine college of art & design, Maine College of Art and Design, main college of art, main college of art and design, main college of art & design, Main College of Art, Main College of Art & Design, maine collage of art, maine collage of art and design, maine collage of art & design, MECAD, mecad",
    "city": "Portland",
    "country": "USA",
    "memberId": 916,
    "memberName": "Maine College of Art & Design",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.meca.edu"
  },
  {
    "alternateSearchName": "Gardner Webb",
    "city": "Boiling Springs",
    "country": "USA",
    "memberId": 917,
    "memberName": "Gardner-Webb University",
    "memberTypeDescription": "Coed",
    "webSite": "http://gardner-webb.edu/"
  },
  {
    "alternateSearchName": "St. Xavier University, SXU",
    "city": "Chicago",
    "country": "USA",
    "memberId": 918,
    "memberName": "Saint Xavier University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.sxu.edu"
  },
  {
    "alternateSearchName": "Muskie, Muskies, Muskingum College",
    "city": "New Concord",
    "country": "USA",
    "memberId": 919,
    "memberName": "Muskingum University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.muskingum.edu/"
  },
  {
    "alternateSearchName": "MCA",
    "city": "Beverly",
    "country": "USA",
    "memberId": 920,
    "memberName": "Montserrat College of Art",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.montserrat.edu/"
  },
  {
    "alternateSearchName": "NU, Michigan",
    "city": "Midland",
    "country": "USA",
    "memberId": 921,
    "memberName": "Northwood University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.northwood.edu"
  },
  {
    "alternateSearchName": "UMA",
    "city": "Augusta",
    "country": "USA",
    "memberId": 922,
    "memberName": "University of Maine at Augusta",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.uma.edu/"
  },
  {
    "alternateSearchName": "TWU",
    "city": "Washington",
    "country": "USA",
    "memberId": 923,
    "memberName": "Trinity Washington University",
    "memberTypeDescription": "Women",
    "webSite": "https://discover.trinitydc.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Bryn Athyn",
    "country": "USA",
    "memberId": 924,
    "memberName": "Bryn Athyn College",
    "memberTypeDescription": "Coed",
    "webSite": "https://brynathyn.edu/"
  },
  {
    "alternateSearchName": "IE,IE University,IE Madrid,Spain",
    "city": "Madrid",
    "country": "ESP",
    "memberId": 926,
    "memberName": "IE University - Madrid Campus",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.ie.edu/university"
  },
  {
    "alternateSearchName": "AUB",
    "city": "Beirut",
    "country": "LBN",
    "memberId": 929,
    "memberName": "American University of Beirut (AUB)",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.aub.edu.lb/admissions/"
  },
  {
    "alternateSearchName": "Indiana University Indianapolis, Indiana University Indy, IU Indianapolis, IUI, IU Indy, IUPUI",
    "city": "Indianapolis",
    "country": "USA",
    "memberId": 932,
    "memberName": "Indiana University Indianapolis ",
    "memberTypeDescription": "Coed",
    "webSite": "https://indianapolis.iu.edu"
  },
  {
    "alternateSearchName": "AUB, AUB UK",
    "city": "Poole",
    "country": "GBR",
    "memberId": 933,
    "memberName": "Arts University Bournemouth, UK",
    "memberTypeDescription": "Coed",
    "webSite": "https://aub.ac.uk/"
  },
  {
    "alternateSearchName": "BU, Bellarmine, Bellarmine College",
    "city": "Louisville",
    "country": "USA",
    "memberId": 934,
    "memberName": "Bellarmine University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.bellarmine.edu/"
  },
  {
    "alternateSearchName": "BSU",
    "city": "Bridgewater",
    "country": "USA",
    "memberId": 935,
    "memberName": "Bridgewater State University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.bridgew.edu"
  },
  {
    "alternateSearchName": "Philadelphia College of Bible, Philadelphia Biblical University, PBU, PCB, CU",
    "city": "Langhorne",
    "country": "USA",
    "memberId": 936,
    "memberName": "Cairn University",
    "memberTypeDescription": "Coed",
    "webSite": "https://cairn.edu/"
  },
  {
    "alternateSearchName": "CalU, California, Clarion, Edinboro, PennWest, Penn West, Pennsylvania Western University",
    "city": "California",
    "country": "USA",
    "memberId": 937,
    "memberName": "Pennsylvania Western University of Pennsylvania",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.pennwest.edu"
  },
  {
    "alternateSearchName": "FSU",
    "city": "Tallahassee",
    "country": "USA",
    "memberId": 939,
    "memberName": "Florida State University",
    "memberTypeDescription": "Coed",
    "webSite": "https://admissions.fsu.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Romeoville",
    "country": "USA",
    "memberId": 940,
    "memberName": "Lewis University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.lewisu.edu"
  },
  {
    "alternateSearchName": "MSU",
    "city": "East Lansing",
    "country": "USA",
    "memberId": 941,
    "memberName": "Michigan State University",
    "memberTypeDescription": "Coed",
    "webSite": "https://admissions.msu.edu/"
  },
  {
    "alternateSearchName": "MSU",
    "city": "Mississippi State",
    "country": "USA",
    "memberId": 942,
    "memberName": "Mississippi State University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.msstate.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Sioux City",
    "country": "USA",
    "memberId": 943,
    "memberName": "Morningside University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.morningside.edu/"
  },
  {
    "alternateSearchName": "OSU, Oregon State, Cascades, OSU-Cascades",
    "city": "Corvallis",
    "country": "USA",
    "memberId": 944,
    "memberName": "Oregon State University",
    "memberTypeDescription": "Coed",
    "webSite": "http://oregonstate.edu"
  },
  {
    "alternateSearchName": "Pennsylvania State,\nUniversity Park,\nPenn State UP,\nUP,\nState College,\nPSU,\nPenn State University,\nThe Pennsylvania State University,\nPennsylvania State University,\nPenn State,\nPenn State Abington,\nPenn State Altoona,\nPenn State Beaver,\nPenn...State",
    "city": "University Park",
    "country": "USA",
    "memberId": 945,
    "memberName": "Penn State",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.psu.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Quincy",
    "country": "USA",
    "memberId": 946,
    "memberName": "Quincy University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.quincy.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Radford",
    "country": "USA",
    "memberId": 947,
    "memberName": "Radford University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.radford.edu"
  },
  {
    "alternateSearchName": "SU, Ship, Shippensburg U, Ship U, Ship University",
    "city": "Shippensburg",
    "country": "USA",
    "memberId": 948,
    "memberName": "Shippensburg University of Pennsylvania",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.ship.edu"
  },
  {
    "alternateSearchName": "SFC, St Francis College, Saint Francis College",
    "city": "Brooklyn",
    "country": "USA",
    "memberId": 949,
    "memberName": "St. Francis College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.sfc.edu"
  },
  {
    "alternateSearchName": "TUJ",
    "city": "Setagaya-ku",
    "country": "JPN",
    "memberId": 950,
    "memberName": "Temple University, Japan Campus",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.tuj.ac.jp/ug/"
  },
  {
    "alternateSearchName": "TESC",
    "city": "Olympia",
    "country": "USA",
    "memberId": 951,
    "memberName": "The Evergreen State College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.evergreen.edu/"
  },
  {
    "alternateSearchName": "Utah utah uofu UofU Utes utes",
    "city": "Salt Lake City",
    "country": "USA",
    "memberId": 952,
    "memberName": "The University of Utah",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.utah.edu/"
  },
  {
    "alternateSearchName": "UWF",
    "city": "Pensacola",
    "country": "USA",
    "memberId": 953,
    "memberName": "The University of West Florida",
    "memberTypeDescription": "Coed",
    "webSite": "https://uwf.edu"
  },
  {
    "alternateSearchName": "Florida Atlantic",
    "city": "Jupiter",
    "country": "USA",
    "memberId": 954,
    "memberName": "Wilkes Honors College of FAU",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.honorscollege.edu"
  },
  {
    "alternateSearchName": "UI, Iowa, uiowa",
    "city": "Iowa City",
    "country": "USA",
    "memberId": 957,
    "memberName": "University of Iowa",
    "memberTypeDescription": "Coed",
    "webSite": "http://uiowa.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Alliance",
    "country": "USA",
    "memberId": 958,
    "memberName": "University of Mount Union",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.mountunion.edu"
  },
  {
    "alternateSearchName": "UNCC, UNC Charlotte, Charlotte, University of North Carolina at Charlotte, University of North Carolina Charlotte",
    "city": "Charlotte",
    "country": "USA",
    "memberId": 959,
    "memberName": "University of North Carolina at Charlotte",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.charlotte.edu/"
  },
  {
    "alternateSearchName": "Pitt",
    "city": "Pittsburgh",
    "country": "USA",
    "memberId": 960,
    "memberName": "University of Pittsburgh",
    "memberTypeDescription": "Coed",
    "webSite": "https://admissions.pitt.edu/first-year-student/?utm_medium=web&utm_source=commonapp&utm_campaign=apply"
  },
  {
    "alternateSearchName": "",
    "city": "North Canton",
    "country": "USA",
    "memberId": 961,
    "memberName": "Walsh University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.walsh.edu/"
  },
  {
    "alternateSearchName": "WPU",
    "city": "Portland",
    "country": "USA",
    "memberId": 962,
    "memberName": "Warner Pacific University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.warnerpacific.edu/"
  },
  {
    "alternateSearchName": "Webb, WI, Webb Institute of Naval Architecture and Marine Engineering",
    "city": "Glen Cove",
    "country": "USA",
    "memberId": 963,
    "memberName": "Webb Institute",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.webb.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Dayton",
    "country": "USA",
    "memberId": 964,
    "memberName": "Wright State University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.wright.edu/"
  },
  {
    "alternateSearchName": "KU",
    "city": "Lawrence",
    "country": "USA",
    "memberId": 965,
    "memberName": "University of Kansas",
    "memberTypeDescription": "Coed",
    "webSite": "https://ku.edu/admissions"
  },
  {
    "alternateSearchName": "CUH, Chaminade, Chaminade University",
    "city": "Honolulu",
    "country": "USA",
    "memberId": 966,
    "memberName": "Chaminade University of Honolulu",
    "memberTypeDescription": "Coed",
    "webSite": "https://chaminade.edu/"
  },
  {
    "alternateSearchName": "ucmo, UCM",
    "city": "Warrensburg",
    "country": "USA",
    "memberId": 967,
    "memberName": "University of Central Missouri",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.ucmo.edu"
  },
  {
    "alternateSearchName": "Bluffton, BU",
    "city": "Bluffton",
    "country": "USA",
    "memberId": 968,
    "memberName": "Bluffton University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.bluffton.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Nashville",
    "country": "USA",
    "memberId": 970,
    "memberName": "Lipscomb University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.lipscomb.edu"
  },
  {
    "alternateSearchName": "SEMO",
    "city": "Cape Girardeau",
    "country": "USA",
    "memberId": 971,
    "memberName": "Southeast Missouri State University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.semo.edu"
  },
  {
    "alternateSearchName": "Lindenwood University, Lindenwood, Lindenwood College, University of Lindenwood, LU",
    "city": "Saint Charles",
    "country": "USA",
    "memberId": 972,
    "memberName": "Lindenwood University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.lindenwood.edu/"
  },
  {
    "alternateSearchName": "WCU, West Chester, WCUPA ,Westchester",
    "city": "West Chester",
    "country": "USA",
    "memberId": 973,
    "memberName": "West Chester University of Pennsylvania",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.wcupa.edu/"
  },
  {
    "alternateSearchName": "Ole Miss",
    "city": "University",
    "country": "USA",
    "memberId": 974,
    "memberName": "Ole Miss - The University of Mississippi",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.olemiss.edu/"
  },
  {
    "alternateSearchName": "Bulldogs, SCSU, South Carolina, HBCU, SC State",
    "city": "Orangeburg",
    "country": "USA",
    "memberId": 975,
    "memberName": "South Carolina State University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.scsu.edu/"
  },
  {
    "alternateSearchName": "DRBU",
    "city": "Ukiah",
    "country": "USA",
    "memberId": 976,
    "memberName": "Dharma Realm Buddhist University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.drbu.edu"
  },
  {
    "alternateSearchName": "A&T, NCAT, N.C. A&T",
    "city": "Greensboro",
    "country": "USA",
    "memberId": 977,
    "memberName": "North Carolina A&T State University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.ncat.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Dundee",
    "country": "GBR",
    "memberId": 978,
    "memberName": "University of Dundee",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.dundee.ac.uk/"
  },
  {
    "alternateSearchName": "Pioneer, Pioneers, Tusculum, Tusculum College",
    "city": "Greeneville",
    "country": "USA",
    "memberId": 979,
    "memberName": "Tusculum University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.tusculum.edu"
  },
  {
    "alternateSearchName": "MSOE",
    "city": "Milwaukee",
    "country": "USA",
    "memberId": 980,
    "memberName": "Milwaukee School of Engineering",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.msoe.edu"
  },
  {
    "alternateSearchName": "University of Olivet, OC, Olivet University, Olivet, Olivet College",
    "city": "Olivet",
    "country": "USA",
    "memberId": 982,
    "memberName": "The University of Olivet",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.uolivet.edu"
  },
  {
    "alternateSearchName": "MBU, MBC, Mary Baldwin College",
    "city": "Staunton",
    "country": "USA",
    "memberId": 983,
    "memberName": "Mary Baldwin University",
    "memberTypeDescription": "Coed",
    "webSite": "https://marybaldwin.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Quincy",
    "country": "USA",
    "memberId": 984,
    "memberName": "Eastern Nazarene College",
    "memberTypeDescription": "Coed",
    "webSite": "https://enc.edu/"
  },
  {
    "alternateSearchName": "Saint Luke’s College of Health Sciences",
    "city": "Kansas City",
    "country": "USA",
    "memberId": 985,
    "memberName": "Rockhurst University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.rockhurst.edu/"
  },
  {
    "alternateSearchName": "Asbury College",
    "city": "Wilmore",
    "country": "USA",
    "memberId": 986,
    "memberName": "Asbury University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.asbury.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Lansdowne",
    "country": "USA",
    "memberId": 987,
    "memberName": "Jack Kent Cooke Foundation",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.jkcf.org/our-scholarships/"
  },
  {
    "alternateSearchName": "UVAWISE",
    "city": "Wise",
    "country": "USA",
    "memberId": 988,
    "memberName": "The University of Virginia's College at Wise",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.uvawise.edu"
  },
  {
    "alternateSearchName": "Saint Paul, St Paul, CSP",
    "city": "Saint Paul",
    "country": "USA",
    "memberId": 991,
    "memberName": "Concordia University, St. Paul",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.csp.edu"
  },
  {
    "alternateSearchName": "Mt Mary University",
    "city": "Milwaukee",
    "country": "USA",
    "memberId": 992,
    "memberName": "Mount Mary University",
    "memberTypeDescription": "Women",
    "webSite": "https://www.mtmary.edu/"
  },
  {
    "alternateSearchName": "covenant",
    "city": "Lookout Mountain",
    "country": "USA",
    "memberId": 993,
    "memberName": "Covenant College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.covenant.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Mc Pherson",
    "country": "USA",
    "memberId": 994,
    "memberName": "McPherson College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.mcpherson.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Menomonie",
    "country": "USA",
    "memberId": 995,
    "memberName": "University of Wisconsin-Stout",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.uwstout.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Harrisburg",
    "country": "USA",
    "memberId": 998,
    "memberName": "Harrisburg University of Science and Technology",
    "memberTypeDescription": "Coed",
    "webSite": "http://harrisburgu.edu/"
  },
  {
    "alternateSearchName": "Missoula College",
    "city": "Missoula",
    "country": "USA",
    "memberId": 1001,
    "memberName": "University of Montana",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.umt.edu/"
  },
  {
    "alternateSearchName": "USD",
    "city": "Vermillion",
    "country": "USA",
    "memberId": 1003,
    "memberName": "University of South Dakota",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.usd.edu/"
  },
  {
    "alternateSearchName": "FSU",
    "city": "Frostburg",
    "country": "USA",
    "memberId": 1004,
    "memberName": "Frostburg State University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.frostburg.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Babson Park",
    "country": "USA",
    "memberId": 1006,
    "memberName": "Webber International University",
    "memberTypeDescription": "Coed",
    "webSite": "https://webber.edu/"
  },
  {
    "alternateSearchName": "K-State, KSU",
    "city": "Manhattan",
    "country": "USA",
    "memberId": 1007,
    "memberName": "Kansas State University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.k-state.edu/"
  },
  {
    "alternateSearchName": "MSU Denver, MSUD, MSU, MSU of Denver, MSUDenver, Metro, Metro State, Metropolitan State University, Metropolitan State University of Denver,  Metro State of Denver, Metro State College. Metro State University",
    "city": "Denver",
    "country": "USA",
    "memberId": 1009,
    "memberName": "Metropolitan State University of Denver (MSU Denver)",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.msudenver.edu/?utm_source=commonapp&utm_medium=ca-profile-fy&utm_campaign=apply-fa24&utm_term=first-time&utm_content=hyperlink"
  },
  {
    "alternateSearchName": "USC, South Carolina, Carolina, UofSC, Gamecocks, University of South Carolina-Columbia, University of South Carolina",
    "city": "Columbia",
    "country": "USA",
    "memberId": 1010,
    "memberName": "University of South Carolina Columbia",
    "memberTypeDescription": "Coed",
    "webSite": "https://sc.edu/"
  },
  {
    "alternateSearchName": "UTA, UT Arlington, The University of Texas at Arlington, University of Texas at Arlington, University of Texas - Arlington",
    "city": "Arlington",
    "country": "USA",
    "memberId": 1011,
    "memberName": "University of Texas Arlington",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.uta.edu/uta/"
  },
  {
    "alternateSearchName": "UND, North Dakota",
    "city": "Grand Forks",
    "country": "USA",
    "memberId": 1012,
    "memberName": "University of North Dakota",
    "memberTypeDescription": "Coed",
    "webSite": "https://und.edu/"
  },
  {
    "alternateSearchName": "NKU",
    "city": "Highland Heights",
    "country": "USA",
    "memberId": 1014,
    "memberName": "Northern Kentucky University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.nku.edu/"
  },
  {
    "alternateSearchName": "Wisconsin Lutheran, WLC",
    "city": "Milwaukee",
    "country": "USA",
    "memberId": 1015,
    "memberName": "Wisconsin Lutheran College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.wlc.edu/"
  },
  {
    "alternateSearchName": "Augusta, Augusta State, Augusta State University, Augusta College, Georgia Health Science University, Medical College of Georgia, Georgia Regents University, GRU, AU",
    "city": "Augusta",
    "country": "USA",
    "memberId": 1017,
    "memberName": "Augusta University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.augusta.edu/"
  },
  {
    "alternateSearchName": "Midway",
    "city": "Midway",
    "country": "USA",
    "memberId": 1018,
    "memberName": "Midway University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.midway.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Saint Paul",
    "country": "USA",
    "memberId": 1020,
    "memberName": "Bethel University (MN)",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.bethel.edu"
  },
  {
    "alternateSearchName": "umc, crookston, golden eagle application, golden eagle, umnc, university of Minnesota",
    "city": "Crookston",
    "country": "USA",
    "memberId": 1021,
    "memberName": "University of Minnesota Crookston",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.crk.umn.edu/"
  },
  {
    "alternateSearchName": "Messiah College",
    "city": "Mechanicsburg",
    "country": "USA",
    "memberId": 1022,
    "memberName": "Messiah University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.messiah.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Portsmouth",
    "country": "USA",
    "memberId": 1023,
    "memberName": "Shawnee State University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.shawnee.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Pittsburgh",
    "country": "USA",
    "memberId": 1024,
    "memberName": "Duquesne University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.duq.edu"
  },
  {
    "alternateSearchName": "FGCU, Gulf Coast",
    "city": "Fort Myers",
    "country": "USA",
    "memberId": 1025,
    "memberName": "Florida Gulf Coast University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.fgcu.edu/"
  },
  {
    "alternateSearchName": "DU, Dom, Dominican",
    "city": "River Forest",
    "country": "USA",
    "memberId": 1026,
    "memberName": "Dominican University (IL)",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.dom.edu/"
  },
  {
    "alternateSearchName": "UCWV, UC, Morris Harvey",
    "city": "Charleston",
    "country": "USA",
    "memberId": 1027,
    "memberName": "University of Charleston",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.ucwv.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Fulton",
    "country": "USA",
    "memberId": 1028,
    "memberName": "William Woods University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.williamwoods.edu/"
  },
  {
    "alternateSearchName": "UIW",
    "city": "San Antonio",
    "country": "USA",
    "memberId": 1029,
    "memberName": "University of the Incarnate Word",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.uiw.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Bridgewater",
    "country": "USA",
    "memberId": 1030,
    "memberName": "Bridgewater College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.bridgewater.edu"
  },
  {
    "alternateSearchName": "Elon",
    "city": "Elon",
    "country": "USA",
    "memberId": 1031,
    "memberName": "Elon University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.elon.edu/"
  },
  {
    "alternateSearchName": "Arkansas, U Arkansas, U of Arkansas, UofA, U of A, Razorbacks, UAF, UA",
    "city": "Fayetteville",
    "country": "USA",
    "memberId": 1032,
    "memberName": "University of Arkansas",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.uark.edu"
  },
  {
    "alternateSearchName": "North Central",
    "city": "Naperville",
    "country": "USA",
    "memberId": 1033,
    "memberName": "North Central College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.northcentralcollege.edu/"
  },
  {
    "alternateSearchName": "WSU, Wichita, Shockers",
    "city": "Wichita",
    "country": "USA",
    "memberId": 1034,
    "memberName": "Wichita State University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.wichita.edu/"
  },
  {
    "alternateSearchName": "EMU",
    "city": "Ypsilanti",
    "country": "USA",
    "memberId": 1035,
    "memberName": "Eastern Michigan University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.emich.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Springfield",
    "country": "USA",
    "memberId": 1037,
    "memberName": "Missouri State University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.missouristate.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Putney",
    "country": "USA",
    "memberId": 1038,
    "memberName": "Landmark College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.landmark.edu"
  },
  {
    "alternateSearchName": "UT, UT Dallas, UTD, Dallas, Texas Dallas",
    "city": "Richardson",
    "country": "USA",
    "memberId": 1039,
    "memberName": "The University of Texas at Dallas",
    "memberTypeDescription": "Coed",
    "webSite": "https://enroll.utdallas.edu/"
  },
  {
    "alternateSearchName": "FAU",
    "city": "Boca Raton",
    "country": "USA",
    "memberId": 1040,
    "memberName": "Florida Atlantic University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.fau.edu/"
  },
  {
    "alternateSearchName": "MSSU",
    "city": "Joplin",
    "country": "USA",
    "memberId": 1042,
    "memberName": "Missouri Southern State University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.mssu.edu/"
  },
  {
    "alternateSearchName": "Mount Aloysius",
    "city": "Cresson",
    "country": "USA",
    "memberId": 1043,
    "memberName": "Mount Aloysius College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.mtaloy.edu/"
  },
  {
    "alternateSearchName": "WACC, Williamsport Area Community College, WTI, Williamsport Technical Institute, Penn College, PCT, PCOT, Penn Tech",
    "city": "Williamsport",
    "country": "USA",
    "memberId": 1046,
    "memberName": "Pennsylvania College of Technology",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.pct.edu"
  },
  {
    "alternateSearchName": "ISU, Cyclones",
    "city": "Ames",
    "country": "USA",
    "memberId": 1047,
    "memberName": "Iowa State University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.iastate.edu"
  },
  {
    "alternateSearchName": "CMU",
    "city": "Mount Pleasant",
    "country": "USA",
    "memberId": 1048,
    "memberName": "Central Michigan University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.cmich.edu"
  },
  {
    "alternateSearchName": "UMES",
    "city": "Princess Anne",
    "country": "USA",
    "memberId": 1049,
    "memberName": "University of Maryland Eastern Shore",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.umes.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Redding",
    "country": "USA",
    "memberId": 1050,
    "memberName": "Simpson University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.simpsonu.edu"
  },
  {
    "alternateSearchName": "Mount St., Mount Saint, Saint, Mount St. Mary's, Mount Saint Mary's, Mount",
    "city": "Emmitsburg",
    "country": "USA",
    "memberId": 1051,
    "memberName": "Mount St. Mary's University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.msmary.edu"
  },
  {
    "alternateSearchName": "Misericordia",
    "city": "Dallas",
    "country": "USA",
    "memberId": 1053,
    "memberName": "Misericordia University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.misericordia.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Macon",
    "country": "USA",
    "memberId": 1055,
    "memberName": "Wesleyan College",
    "memberTypeDescription": "Women",
    "webSite": "https://www.wesleyancollege.edu"
  },
  {
    "alternateSearchName": "GMU, GMercyU, Gwynedd",
    "city": "Gwynedd Valley",
    "country": "USA",
    "memberId": 1056,
    "memberName": "Gwynedd Mercy University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.gmercyu.edu"
  },
  {
    "alternateSearchName": "UF",
    "city": "Gainesville",
    "country": "USA",
    "memberId": 1057,
    "memberName": "University of Florida",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.ufl.edu"
  },
  {
    "alternateSearchName": "Fisher",
    "city": "Boston",
    "country": "USA",
    "memberId": 1058,
    "memberName": "Fisher College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.fisher.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Santa Clarita",
    "country": "USA",
    "memberId": 1060,
    "memberName": "The Master's University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.masters.edu/"
  },
  {
    "alternateSearchName": "Chestnut Hill",
    "city": "Philadelphia",
    "country": "USA",
    "memberId": 1061,
    "memberName": "Chestnut Hill College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.chc.edu/"
  },
  {
    "alternateSearchName": "UoB",
    "city": "Bradford",
    "country": "GBR",
    "memberId": 1062,
    "memberName": "University of Bradford",
    "memberTypeDescription": "Coed",
    "webSite": "https://bradford.ac.uk/external/"
  },
  {
    "alternateSearchName": "UM",
    "city": "Dearborn",
    "country": "USA",
    "memberId": 1063,
    "memberName": "University of Michigan-Dearborn",
    "memberTypeDescription": "Coed",
    "webSite": "https://umdearborn.edu/"
  },
  {
    "alternateSearchName": "eureka",
    "city": "Eureka",
    "country": "USA",
    "memberId": 1064,
    "memberName": "Eureka College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.eureka.edu"
  },
  {
    "alternateSearchName": "Culver",
    "city": "Canton",
    "country": "USA",
    "memberId": 1065,
    "memberName": "Culver-Stockton College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.culver.edu"
  },
  {
    "alternateSearchName": "Hampton",
    "city": "Hampton",
    "country": "USA",
    "memberId": 1066,
    "memberName": "Hampton University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.hamptonu.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Dubuque",
    "country": "USA",
    "memberId": 1067,
    "memberName": "Loras College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.loras.edu"
  },
  {
    "alternateSearchName": "Thomas More, TMU",
    "city": "Crestview Hills",
    "country": "USA",
    "memberId": 1068,
    "memberName": "Thomas More University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.thomasmore.edu"
  },
  {
    "alternateSearchName": "UWE, UWE Bristol",
    "city": "Bristol",
    "country": "GBR",
    "memberId": 1069,
    "memberName": "University of the West of England (UWE), Bristol",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.uwe.ac.uk/"
  },
  {
    "alternateSearchName": "",
    "city": "Aberystwyth",
    "country": "GBR",
    "memberId": 1070,
    "memberName": "Aberystwyth University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.aber.ac.uk"
  },
  {
    "alternateSearchName": "",
    "city": "Tiffin",
    "country": "USA",
    "memberId": 1072,
    "memberName": "Heidelberg University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.heidelberg.edu/"
  },
  {
    "alternateSearchName": "AQ",
    "city": "Grand Rapids",
    "country": "USA",
    "memberId": 1073,
    "memberName": "Aquinas College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.aquinas.edu"
  },
  {
    "alternateSearchName": "KU",
    "city": "Kutztown",
    "country": "USA",
    "memberId": 1074,
    "memberName": "Kutztown University of Pennsylvania",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.kutztown.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Farmville",
    "country": "USA",
    "memberId": 1075,
    "memberName": "Longwood University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.longwood.edu/admissions/?utm_source=commonapp&utm_medium=web&utm_campaign=fall23marketing"
  },
  {
    "alternateSearchName": "",
    "city": "Shepherdstown",
    "country": "USA",
    "memberId": 1076,
    "memberName": "Shepherd University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.shepherd.edu"
  },
  {
    "alternateSearchName": "CofC, CoC, Charleston, Charleston University, Charleston College",
    "city": "Charleston",
    "country": "USA",
    "memberId": 1077,
    "memberName": "College of Charleston",
    "memberTypeDescription": "Coed",
    "webSite": "http://cofc.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Wales",
    "country": "GBR",
    "memberId": 1078,
    "memberName": "Swansea University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.swansea.ac.uk/"
  },
  {
    "alternateSearchName": "DU, Davenport",
    "city": "Grand Rapids",
    "country": "USA",
    "memberId": 1079,
    "memberName": "Davenport University",
    "memberTypeDescription": "Coed",
    "webSite": "https://davenport.edu/highschool"
  },
  {
    "alternateSearchName": "DWU",
    "city": "Mitchell",
    "country": "USA",
    "memberId": 1083,
    "memberName": "Dakota Wesleyan University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.dwu.edu"
  },
  {
    "alternateSearchName": "MMA, Mass Maritime, Mass. Maritime, MA Maritime",
    "city": "Buzzards Bay",
    "country": "USA",
    "memberId": 1084,
    "memberName": "Massachusetts Maritime Academy",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.maritime.edu"
  },
  {
    "alternateSearchName": "VU, vuadmit",
    "city": "Vincennes",
    "country": "USA",
    "memberId": 1085,
    "memberName": "Vincennes University",
    "memberTypeDescription": "Coed",
    "webSite": "https://vinu.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Upland",
    "country": "USA",
    "memberId": 1089,
    "memberName": "Taylor University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.taylor.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Leesburg",
    "country": "USA",
    "memberId": 1090,
    "memberName": "Beacon College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.beaconcollege.edu"
  },
  {
    "alternateSearchName": "AAU",
    "city": "Prague 1",
    "country": "CZE",
    "memberId": 1091,
    "memberName": "Anglo-American University in Prague",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.aauni.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Raleigh",
    "country": "USA",
    "memberId": 1093,
    "memberName": "SKEMA Business School - US Campus",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.skema.edu/usa"
  },
  {
    "alternateSearchName": "",
    "city": "Rock Hill",
    "country": "USA",
    "memberId": 1096,
    "memberName": "Winthrop University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.winthrop.edu"
  },
  {
    "alternateSearchName": "TTU, Tech, Red Raider",
    "city": "Lubbock",
    "country": "USA",
    "memberId": 1097,
    "memberName": "Texas Tech University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.ttu.edu"
  },
  {
    "alternateSearchName": "UGA",
    "city": "Athens",
    "country": "USA",
    "memberId": 1098,
    "memberName": "University of Georgia",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.uga.edu/"
  },
  {
    "alternateSearchName": "NSU",
    "city": "Norfolk",
    "country": "USA",
    "memberId": 1099,
    "memberName": "Norfolk State University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.nsu.edu"
  },
  {
    "alternateSearchName": "Clemson; Clemson University; Clemson, SC",
    "city": "Clemson",
    "country": "USA",
    "memberId": 1100,
    "memberName": "Clemson University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.clemson.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Philadelphia",
    "country": "USA",
    "memberId": 1101,
    "memberName": "Holy Family University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.holyfamily.edu/"
  },
  {
    "alternateSearchName": "BV,  Buena Vista, BVU, Storm Lake, Iowa, IA, Private, Rural",
    "city": "Storm Lake",
    "country": "USA",
    "memberId": 1103,
    "memberName": "Buena Vista University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.bvu.edu"
  },
  {
    "alternateSearchName": "Carlow College",
    "city": "Pittsburgh",
    "country": "USA",
    "memberId": 1104,
    "memberName": "Carlow University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.carlow.edu"
  },
  {
    "alternateSearchName": "UTSA, UT San Antonio",
    "city": "San Antonio",
    "country": "USA",
    "memberId": 1105,
    "memberName": "The University of Texas at San Antonio",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.utsa.edu/"
  },
  {
    "alternateSearchName": "RBC; Richard Bland, Richard Bland College of William and Mary",
    "city": "South Prince George",
    "country": "USA",
    "memberId": 1106,
    "memberName": "Richard Bland College of William and Mary",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.rbc.edu/"
  },
  {
    "alternateSearchName": "Coastal Carolina, Coastal, CCU, Chanticleers",
    "city": "Conway",
    "country": "USA",
    "memberId": 1107,
    "memberName": "Coastal Carolina University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.coastal.edu"
  },
  {
    "alternateSearchName": "USF, SP, SM, University of South Florida, St Pete, Saint Petersburg, Sarasota-Manatee, St Petersburg",
    "city": "Tampa",
    "country": "USA",
    "memberId": 1108,
    "memberName": "University of South Florida",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.usf.edu/"
  },
  {
    "alternateSearchName": "Milligan College",
    "city": "Milligan",
    "country": "USA",
    "memberId": 1110,
    "memberName": "Milligan University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.milligan.edu/"
  },
  {
    "alternateSearchName": "Cornerstone College, Corner Stone University",
    "city": "Grand Rapids",
    "country": "USA",
    "memberId": 1111,
    "memberName": "Cornerstone University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.cornerstone.edu/"
  },
  {
    "alternateSearchName": "NIU, Northern, Northern Illinois, Northern Illinois State Normal School",
    "city": "Dekalb",
    "country": "USA",
    "memberId": 1112,
    "memberName": "Northern Illinois University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.niu.edu"
  },
  {
    "alternateSearchName": "IWU, Indiana Wesleyan, IWU-Marion, Indiana Wesleyan University, IndWes",
    "city": "Marion",
    "country": "USA",
    "memberId": 1113,
    "memberName": "Indiana Wesleyan University (Marion)",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.indwes.edu/"
  },
  {
    "alternateSearchName": "LSSU, Lake State, Lake Superior State",
    "city": "Sault Ste Marie",
    "country": "USA",
    "memberId": 1114,
    "memberName": "Lake Superior State University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.lssu.edu/"
  },
  {
    "alternateSearchName": "Auburn, AU",
    "city": "Auburn University",
    "country": "USA",
    "memberId": 1115,
    "memberName": "Auburn University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.auburn.edu"
  },
  {
    "alternateSearchName": "VA Tech; VT; Virginia Polytechnic Institute and State University; VTech; VPI",
    "city": "Blacksburg",
    "country": "USA",
    "memberId": 1117,
    "memberName": "Virginia Tech",
    "memberTypeDescription": "Coed",
    "webSite": "https://vt.edu"
  },
  {
    "alternateSearchName": "Baker College, Culinary Institute of Michigan (CIM), Auto Diesel Institute of Michigan (ADI)",
    "city": "Owosso",
    "country": "USA",
    "memberId": 1118,
    "memberName": "Baker College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.baker.edu/"
  },
  {
    "alternateSearchName": "Point Park",
    "city": "Pittsburgh",
    "country": "USA",
    "memberId": 1119,
    "memberName": "Point Park University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.pointpark.edu/index"
  },
  {
    "alternateSearchName": "Loyola University; Loyola Chicago",
    "city": "Chicago",
    "country": "USA",
    "memberId": 1120,
    "memberName": "Loyola University Chicago",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.luc.edu"
  },
  {
    "alternateSearchName": "UWM, UW-Milwaukee, UW Milwaukee, University of Wisconsin-Milwaukee, University of Wisconsin Milwaukee, UW-Waukesha, UW-Washington County, UWM at Washington County, UWM at Waukesha, UW-Milwaukee at Waukesha, UW-Milwaukee at Washington County, Milwaukee",
    "city": "Milwaukee",
    "country": "USA",
    "memberId": 1121,
    "memberName": "University of Wisconsin-Milwaukee",
    "memberTypeDescription": "Coed",
    "webSite": "https://uwm.edu/"
  },
  {
    "alternateSearchName": "LMC, Lees Mcrae",
    "city": "Banner Elk",
    "country": "USA",
    "memberId": 1122,
    "memberName": "Lees-McRae College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.lmc.edu/"
  },
  {
    "alternateSearchName": "UCCS, CU, Colorado Springs, CU Springs",
    "city": "Colorado Springs",
    "country": "USA",
    "memberId": 1123,
    "memberName": "University of Colorado Colorado Springs",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.uccs.edu"
  },
  {
    "alternateSearchName": "NUL",
    "city": "London",
    "country": "GBR",
    "memberId": 1124,
    "memberName": "Northeastern University London",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.nulondon.ac.uk/"
  },
  {
    "alternateSearchName": "Fresno Pacific",
    "city": "Fresno",
    "country": "USA",
    "memberId": 1125,
    "memberName": "Fresno Pacific University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.fresno.edu/"
  },
  {
    "alternateSearchName": "UMD, UMCP, Terp, U of MD",
    "city": "College Park",
    "country": "USA",
    "memberId": 1127,
    "memberName": "University of Maryland",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.umd.edu"
  },
  {
    "alternateSearchName": "Trevecca Nazarene College, Trevecca, TNU",
    "city": "Nashville",
    "country": "USA",
    "memberId": 1128,
    "memberName": "Trevecca Nazarene University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.trevecca.edu/"
  },
  {
    "alternateSearchName": "UofL, UL, Louisville",
    "city": "Louisville",
    "country": "USA",
    "memberId": 1129,
    "memberName": "University of Louisville",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.louisville.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Louisville",
    "country": "USA",
    "memberId": 1130,
    "memberName": "Spalding University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.spalding.edu/"
  },
  {
    "alternateSearchName": "Palm Beach Atlantic College, Palm Beach Atlantic, PBA, PBAU, Palm Beach, Palm Beach College, Palm Beach University, Palm Beach Atlantic University",
    "city": "West Palm Beach",
    "country": "USA",
    "memberId": 1132,
    "memberName": "Palm Beach Atlantic University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.pba.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Wilmington",
    "country": "USA",
    "memberId": 1133,
    "memberName": "Wilmington College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.wilmington.edu/"
  },
  {
    "alternateSearchName": "CU Denver, UCD, UC Denver, CUD",
    "city": "Denver",
    "country": "USA",
    "memberId": 1134,
    "memberName": "University of Colorado Denver",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.ucdenver.edu/"
  },
  {
    "alternateSearchName": "MSU, Montclair, Bloomfield",
    "city": "Montclair",
    "country": "USA",
    "memberId": 1135,
    "memberName": "Montclair State University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.montclair.edu/admissions"
  },
  {
    "alternateSearchName": "CCA, Cornish",
    "city": "Seattle",
    "country": "USA",
    "memberId": 1136,
    "memberName": "Cornish College of the Arts",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.cornish.edu"
  },
  {
    "alternateSearchName": "AIC, American International",
    "city": "Springfield",
    "country": "USA",
    "memberId": 1137,
    "memberName": "American International College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.aic.edu/"
  },
  {
    "alternateSearchName": "American Academy of Art College, American Academy of Art, aaart, Academy of Art",
    "city": "Chicago",
    "country": "USA",
    "memberId": 1138,
    "memberName": "American Academy of Art College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.aaart.edu"
  },
  {
    "alternateSearchName": "SMC, SJC",
    "city": "Spartanburg",
    "country": "USA",
    "memberId": 1139,
    "memberName": "Spartanburg Methodist College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.smcsc.edu/"
  },
  {
    "alternateSearchName": "Tec de Monterrey",
    "city": "Monterrey",
    "country": "MEX",
    "memberId": 1140,
    "memberName": "Tecnológico de Monterrey",
    "memberTypeDescription": "Coed",
    "webSite": "https://tec.mx/en"
  },
  {
    "alternateSearchName": "Catholic University of Murcia",
    "city": "Murcia",
    "country": "ESP",
    "memberId": 1144,
    "memberName": "UCAM Universidad Católica de Murcia",
    "memberTypeDescription": "Coed",
    "webSite": "https://international.ucam.edu/"
  },
  {
    "alternateSearchName": "UWEC, UWEC-BC, Barron County, Rice Lake, Barron, UW, WI, Eau Claire",
    "city": "Eau Claire",
    "country": "USA",
    "memberId": 1146,
    "memberName": "University of Wisconsin-Eau Claire",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.uwec.edu"
  },
  {
    "alternateSearchName": null,
    "city": "San Juan",
    "country": "USA",
    "memberId": 1147,
    "memberName": "Inter American University of Puerto Rico",
    "memberTypeDescription": "Coordinate",
    "webSite": "http://inter.edu/"
  },
  {
    "alternateSearchName": "SIUE, Edwardsville, Southern Illinois",
    "city": "Edwardsville",
    "country": "USA",
    "memberId": 1149,
    "memberName": "Southern Illinois University Edwardsville",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.siue.edu"
  },
  {
    "alternateSearchName": "csm",
    "city": "Golden",
    "country": "USA",
    "memberId": 1150,
    "memberName": "Colorado School of Mines",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.mines.edu/"
  },
  {
    "alternateSearchName": "GC, Grace",
    "city": "Winona Lake",
    "country": "USA",
    "memberId": 1151,
    "memberName": "Grace College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.grace.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Westfield",
    "country": "USA",
    "memberId": 1152,
    "memberName": "Westfield State University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.westfield.ma.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Beirut",
    "country": "LBN",
    "memberId": 1153,
    "memberName": "Lebanese American University - LAU",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.lau.edu.lb/"
  },
  {
    "alternateSearchName": "University of Alabama, UA, Alabama",
    "city": "Tuscaloosa",
    "country": "USA",
    "memberId": 1154,
    "memberName": "The University of Alabama",
    "memberTypeDescription": "Coed",
    "webSite": "https://admissions.ua.edu"
  },
  {
    "alternateSearchName": "Villa Maria",
    "city": "Buffalo",
    "country": "USA",
    "memberId": 1155,
    "memberName": "Villa Maria College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.villa.edu/"
  },
  {
    "alternateSearchName": "ISU, Illinois State, ilstu, IllinoisState, Illinoi,",
    "city": "Normal",
    "country": "USA",
    "memberId": 1156,
    "memberName": "Illinois State University",
    "memberTypeDescription": "Coed",
    "webSite": "https://illinoisstate.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Fort Wayne",
    "country": "USA",
    "memberId": 1157,
    "memberName": "Indiana Tech",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.indianatech.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Clarksville",
    "country": "USA",
    "memberId": 1158,
    "memberName": "Austin Peay State University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.apsu.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Cincinnati",
    "country": "USA",
    "memberId": 1159,
    "memberName": "Mount St. Joseph University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.msj.edu/"
  },
  {
    "alternateSearchName": "EIU",
    "city": "Charleston",
    "country": "USA",
    "memberId": 1160,
    "memberName": "Eastern Illinois University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.eiu.edu"
  },
  {
    "alternateSearchName": null,
    "city": "Fort Worth",
    "country": "USA",
    "memberId": 1161,
    "memberName": "Texas Wesleyan University",
    "memberTypeDescription": "Coed",
    "webSite": "https://txwes.edu/"
  },
  {
    "alternateSearchName": "PSU, Portland State,Portland,PDX",
    "city": "Portland",
    "country": "USA",
    "memberId": 1162,
    "memberName": "Portland State University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.pdx.edu/"
  },
  {
    "alternateSearchName": "PrattMWP, Pratt, Pratt Munson",
    "city": "Brooklyn",
    "country": "USA",
    "memberId": 1163,
    "memberName": "Pratt Institute",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.pratt.edu/"
  },
  {
    "alternateSearchName": null,
    "city": "University Park",
    "country": "USA",
    "memberId": 1164,
    "memberName": "Governors State University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.govst.edu/"
  },
  {
    "alternateSearchName": "UIUC, Illinois, UofI, Urbana, Champaign, UIllinois, Champagne, Illini",
    "city": "Urbana",
    "country": "USA",
    "memberId": 1165,
    "memberName": "University of Illinois Urbana-Champaign",
    "memberTypeDescription": "Coed",
    "webSite": "https://illinois.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Grand Junction",
    "country": "USA",
    "memberId": 1167,
    "memberName": "Colorado Mesa University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.coloradomesa.edu/"
  },
  {
    "alternateSearchName": "NEIU, Northeastern Illinois",
    "city": "Chicago",
    "country": "USA",
    "memberId": 1168,
    "memberName": "Northeastern Illinois University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.neiu.edu"
  },
  {
    "alternateSearchName": "SIU, SIUC, SIU Carbondale",
    "city": "Carbondale",
    "country": "USA",
    "memberId": 1170,
    "memberName": "Southern Illinois University Carbondale",
    "memberTypeDescription": "Coed",
    "webSite": "https://siu.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Austin",
    "country": "USA",
    "memberId": 1171,
    "memberName": "The University of Texas at Austin",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.utexas.edu/"
  },
  {
    "alternateSearchName": "CUAA, CUWAA, Concordia Ann Arbor",
    "city": "Ann Arbor",
    "country": "USA",
    "memberId": 1172,
    "memberName": "Concordia University Ann Arbor",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.cuaa.edu/"
  },
  {
    "alternateSearchName": "UIS",
    "city": "Springfield",
    "country": "USA",
    "memberId": 1173,
    "memberName": "University of Illinois Springfield",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.uis.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Dahlonega",
    "country": "USA",
    "memberId": 1174,
    "memberName": "University of North Georgia",
    "memberTypeDescription": "Coed",
    "webSite": "https://ung.edu/"
  },
  {
    "alternateSearchName": "Charleston University, Southern Charleston University, University of Charleston, College of Charleston",
    "city": "Charleston",
    "country": "USA",
    "memberId": 1175,
    "memberName": "Charleston Southern University",
    "memberTypeDescription": "Coed",
    "webSite": "https://charlestonsouthern.edu/apply"
  },
  {
    "alternateSearchName": "",
    "city": "Belmont",
    "country": "USA",
    "memberId": 1176,
    "memberName": "Belmont Abbey College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.belmontabbeycollege.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Clinton",
    "country": "USA",
    "memberId": 1177,
    "memberName": "Mississippi College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.mc.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Kingston 5",
    "country": "JAM",
    "memberId": 1178,
    "memberName": "University of the Commonwealth Caribbean Global Campus",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.ucc.edu.jm"
  },
  {
    "alternateSearchName": "Manor College, Manor College, Manor Coll, Ma, College, Man, M, Nor, Col, Mi, Mn, Mo, Mr, Mc, Holy Family, Community College, CCP, DCCC, Family, Fox Chase, Temple, Stockton, Delaware Valley, Harcum, Philly, Philadelphia",
    "city": "Jenkintown",
    "country": "USA",
    "memberId": 1179,
    "memberName": "Manor College",
    "memberTypeDescription": "Coed",
    "webSite": "https://manor.edu/"
  },
  {
    "alternateSearchName": "Oregon Institute of Technology, OIT, Oregon State University, University of Oregon, Portland State University, Portland State, Oregon State, Oregon Tech University, Tech School, Engineering School, STEM School, Polytechnic University, Polytech, Tech, Technical, OTI, Oregon Polytech, Oregon Poly, Oregon Polytechnic",
    "city": "Klamath Falls",
    "country": "USA",
    "memberId": 1180,
    "memberName": "Oregon Tech",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.oit.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Wenham",
    "country": "USA",
    "memberId": 1181,
    "memberName": "Gordon College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.gordon.edu/"
  },
  {
    "alternateSearchName": "Texas A&M University-Commerce",
    "city": "Commerce",
    "country": "USA",
    "memberId": 1182,
    "memberName": "Texas A & M University-Commerce",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.tamuc.edu/"
  },
  {
    "alternateSearchName": "Texas, A&M, Texas A and M",
    "city": "College Station",
    "country": "USA",
    "memberId": 1183,
    "memberName": "Texas A&M University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.tamu.edu"
  },
  {
    "alternateSearchName": "Ft Lewis College",
    "city": "Durango",
    "country": "USA",
    "memberId": 1184,
    "memberName": "Fort Lewis College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.fortlewis.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Rockford",
    "country": "USA",
    "memberId": 1185,
    "memberName": "Rockford University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.rockford.edu"
  },
  {
    "alternateSearchName": "jmu",
    "city": "Harrisonburg",
    "country": "USA",
    "memberId": 1186,
    "memberName": "James Madison University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.jmu.edu/"
  },
  {
    "alternateSearchName": "Greenville College",
    "city": "Greenville",
    "country": "USA",
    "memberId": 1187,
    "memberName": "Greenville University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.greenville.edu/"
  },
  {
    "alternateSearchName": "UNWSP, University of Northwestern, Northwestern College, Northwestern, UNW, St. Paul, Saint Paul, MN, St Paul",
    "city": "Saint Paul",
    "country": "USA",
    "memberId": 1189,
    "memberName": "University of Northwestern-St. Paul",
    "memberTypeDescription": "Coed",
    "webSite": "https://unwsp.edu"
  },
  {
    "alternateSearchName": null,
    "city": "Wingate",
    "country": "USA",
    "memberId": 1190,
    "memberName": "Wingate University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.wingate.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Springfield",
    "country": "USA",
    "memberId": 1191,
    "memberName": "Evangel University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.evangel.edu/"
  },
  {
    "alternateSearchName": "ORU",
    "city": "Tulsa",
    "country": "USA",
    "memberId": 1193,
    "memberName": "Oral Roberts University",
    "memberTypeDescription": "Coed",
    "webSite": "https://oru.edu/"
  },
  {
    "alternateSearchName": "PCAD",
    "city": "Lancaster",
    "country": "USA",
    "memberId": 1194,
    "memberName": "Pennsylvania College of Art & Design",
    "memberTypeDescription": "Coed",
    "webSite": "https://pcad.edu/"
  },
  {
    "alternateSearchName": "WSU, Washington State, Washington State U, WA State, Washington, WAZZU",
    "city": "Pullman",
    "country": "USA",
    "memberId": 1195,
    "memberName": "Washington State University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.wsu.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Worcester",
    "country": "USA",
    "memberId": 1197,
    "memberName": "Worcester State University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.worcester.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Miami Gardens",
    "country": "USA",
    "memberId": 1199,
    "memberName": "Florida Memorial University",
    "memberTypeDescription": "Coed",
    "webSite": "https://fmuniv.edu"
  },
  {
    "alternateSearchName": "St Marys University, St. Marys University, St Mary's University, St. Mary's, St. Marys, St Mary's, St Marys, Saint Mary's University, Saint Marys University, Saint Marys, Saint Mary's, St. Mary's (TX), St. Mary (TX), St Marys (TX), St. Mary University, St Mary University, San Antonio, St. Mary's (San Antonio), St. Mary's University (Texas), St Marys University (Texas)",
    "city": "San Antonio",
    "country": "USA",
    "memberId": 1200,
    "memberName": "St. Mary's University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.stmarytx.edu/"
  },
  {
    "alternateSearchName": "WCU",
    "city": "Cullowhee",
    "country": "USA",
    "memberId": 1201,
    "memberName": "Western Carolina University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.wcu.edu"
  },
  {
    "alternateSearchName": "SVSU, Saginaw Valley",
    "city": "University Center",
    "country": "USA",
    "memberId": 1204,
    "memberName": "Saginaw Valley State University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.svsu.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Terre Haute",
    "country": "USA",
    "memberId": 1205,
    "memberName": "Indiana State University",
    "memberTypeDescription": "Coed",
    "webSite": "https://indstate.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Livonia",
    "country": "USA",
    "memberId": 1206,
    "memberName": "Madonna University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.madonna.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Murfreesboro",
    "country": "USA",
    "memberId": 1207,
    "memberName": "Chowan University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.chowan.edu"
  },
  {
    "alternateSearchName": "USK, Firebirds, St. Kath's, Saint Katherine College",
    "city": "San Marcos",
    "country": "USA",
    "memberId": 1210,
    "memberName": "University of Saint Katherine",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.usk.edu"
  },
  {
    "alternateSearchName": "Vaughn College, Vaughn College of Aeronautics and Technology, Vaughn, Vaughn College of Aeronautics",
    "city": "Flushing",
    "country": "USA",
    "memberId": 1211,
    "memberName": "Vaughn College of Aeronautics and Technology",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.vaughn.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Orangeburg",
    "country": "USA",
    "memberId": 1212,
    "memberName": "Claflin University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.claflin.edu"
  },
  {
    "alternateSearchName": "",
    "city": "East Stroudsburg",
    "country": "USA",
    "memberId": 1213,
    "memberName": "East Stroudsburg University of Pennsylvania",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.esu.edu/"
  },
  {
    "alternateSearchName": "Elmhurst College",
    "city": "Elmhurst",
    "country": "USA",
    "memberId": 1214,
    "memberName": "Elmhurst University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.elmhurst.edu/"
  },
  {
    "alternateSearchName": "FAMU",
    "city": "Tallahassee",
    "country": "USA",
    "memberId": 1215,
    "memberName": "Florida Agricultural & Mechanical University (FAMU)",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.famu.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Chicago",
    "country": "USA",
    "memberId": 1216,
    "memberName": "National Louis University",
    "memberTypeDescription": "Coed",
    "webSite": "https://nl.edu/"
  },
  {
    "alternateSearchName": "Morgan State University. MSU, Morgan, Morgan State",
    "city": "Baltimore",
    "country": "USA",
    "memberId": 1217,
    "memberName": "Morgan State University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.morgan.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Columbia",
    "country": "USA",
    "memberId": 1218,
    "memberName": "Benedict College - Columbia, SC",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.benedict.edu/"
  },
  {
    "alternateSearchName": "Calumet, Calumet College, CCSJ",
    "city": "Whiting",
    "country": "USA",
    "memberId": 1219,
    "memberName": "Calumet College of St. Joseph",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.ccsj.edu"
  },
  {
    "alternateSearchName": "USSA",
    "city": "Daphne",
    "country": "USA",
    "memberId": 1220,
    "memberName": "United States Sports Academy",
    "memberTypeDescription": "Coed",
    "webSite": "https://ussa.edu/"
  },
  {
    "alternateSearchName": "UTEP, UT El Paso",
    "city": "El Paso",
    "country": "USA",
    "memberId": 1221,
    "memberName": "The University of Texas at El Paso",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.utep.edu/"
  },
  {
    "alternateSearchName": "DSU or\nDESU",
    "city": "Dover",
    "country": "USA",
    "memberId": 1222,
    "memberName": "Delaware State University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.desu.edu/"
  },
  {
    "alternateSearchName": "Marian University Wisconsin",
    "city": "Fond Du Lac",
    "country": "USA",
    "memberId": 1223,
    "memberName": "Marian University - Wisconsin",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.marianuniversity.edu/"
  },
  {
    "alternateSearchName": "University of Wisconsin-Whitewater; \nUniversity of Wisconsin Whitewater; \nuw-whitewater;\nUW-Whitewater; \nUW Whitewater; \nWhitewater; \nUWW; \nUniversity of Wisconsin; \nWisconsin; \nUW-W; whitewater; wisconsin; uww; uw-w; uw-m",
    "city": "Whitewater",
    "country": "USA",
    "memberId": 1224,
    "memberName": "University of Wisconsin-Whitewater",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.uww.edu/"
  },
  {
    "alternateSearchName": "West Point, USMA, U.S. Military Academy, United States Military Academy, Westpoint",
    "city": "West Point",
    "country": "USA",
    "memberId": 1225,
    "memberName": "United States Military Academy – West Point",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.westpoint.edu/admissions"
  },
  {
    "alternateSearchName": "",
    "city": "Abilene",
    "country": "USA",
    "memberId": 1226,
    "memberName": "Abilene Christian University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.acu.edu/"
  },
  {
    "alternateSearchName": "KSU",
    "city": "Kennesaw",
    "country": "USA",
    "memberId": 1227,
    "memberName": "Kennesaw State University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.kennesaw.edu/"
  },
  {
    "alternateSearchName": "Marian, Marian Indiana, Marian IN, MU, Marian University, Marian University Indianapolis, SJC, SJI, Saint Joe, Saint Joes, Saint Joe's College, Saint Joe's Indianapolis College, St. Joe's, st Joes, Ancilla, Ancilla College, MUAC, Marion, ACMU, St Joe's",
    "city": "Indianapolis",
    "country": "USA",
    "memberId": 1228,
    "memberName": "Marian University  - Indiana",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.marian.edu/"
  },
  {
    "alternateSearchName": "Lancers, Marty, The Mount,\nYankton, Benedictine, South Dakota, Sioux Falls, Sioux City, Catholic",
    "city": "Yankton",
    "country": "USA",
    "memberId": 1229,
    "memberName": "Mount Marty University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.mountmarty.edu/"
  },
  {
    "alternateSearchName": "CWU, Central Washington, Central WA, Central",
    "city": "Ellensburg",
    "country": "USA",
    "memberId": 1230,
    "memberName": "Central Washington University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.cwu.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Abilene",
    "country": "USA",
    "memberId": 1231,
    "memberName": "McMurry University",
    "memberTypeDescription": "Coed",
    "webSite": "https://mcm.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Montreat",
    "country": "USA",
    "memberId": 1232,
    "memberName": "Montreat College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.montreat.edu/"
  },
  {
    "alternateSearchName": "SFA, Nacogdoches, Lumberjack, Austin, SFASU, Piney Woods, Steven,",
    "city": "Nacogdoches",
    "country": "USA",
    "memberId": 1233,
    "memberName": "Stephen F. Austin State University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.sfasu.edu/"
  },
  {
    "alternateSearchName": "UW, UW-Seattle",
    "city": "Seattle",
    "country": "USA",
    "memberId": 1234,
    "memberName": "University of Washington",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.washington.edu/"
  },
  {
    "alternateSearchName": null,
    "city": "Aurora",
    "country": "USA",
    "memberId": 1236,
    "memberName": "Aurora University",
    "memberTypeDescription": "Coed",
    "webSite": "https://aurora.edu"
  },
  {
    "alternateSearchName": "CIA",
    "city": "Cleveland",
    "country": "USA",
    "memberId": 1237,
    "memberName": "Cleveland Institute of Art",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.cia.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Raleigh",
    "country": "USA",
    "memberId": 1238,
    "memberName": "Shaw University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.shawu.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Gaffney",
    "country": "USA",
    "memberId": 1239,
    "memberName": "Limestone University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.limestone.edu/"
  },
  {
    "alternateSearchName": "Methodist, MU, Methodist U, Monarchs",
    "city": "Fayetteville",
    "country": "USA",
    "memberId": 1240,
    "memberName": "Methodist University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.methodist.edu/"
  },
  {
    "alternateSearchName": "Citadel",
    "city": "Charleston",
    "country": "USA",
    "memberId": 1241,
    "memberName": "The Citadel, The Military College of South Carolina",
    "memberTypeDescription": "Coed",
    "webSite": "https://go.citadel.edu/"
  },
  {
    "alternateSearchName": "Gilbert, Arizona, Missouri, Parkville, Phoenix, Kansas, Kansas City",
    "city": "Parkville",
    "country": "USA",
    "memberId": 1242,
    "memberName": "Park University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.park.edu/admissions/undergraduate-admissions/"
  },
  {
    "alternateSearchName": "Indiana University Northwest, IUN, IU Northwest, IUNW",
    "city": "Gary",
    "country": "USA",
    "memberId": 1243,
    "memberName": "Indiana University Northwest",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.iun.edu/admissions/index.htm"
  },
  {
    "alternateSearchName": "",
    "city": "Augusta",
    "country": "USA",
    "memberId": 1244,
    "memberName": "Paine College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.paine.edu/web/mycampus/home"
  },
  {
    "alternateSearchName": "GBC, Goldey, Goldey Beacom College, Goldey Beacom",
    "city": "Wilmington",
    "country": "USA",
    "memberId": 1245,
    "memberName": "Goldey-Beacom College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.gbc.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Greensboro",
    "country": "USA",
    "memberId": 1246,
    "memberName": "Greensboro College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.greensboro.edu"
  },
  {
    "alternateSearchName": "EOU, Eastern Oregon",
    "city": "La Grande",
    "country": "USA",
    "memberId": 1247,
    "memberName": "Eastern Oregon University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.eou.edu/admissions/"
  },
  {
    "alternateSearchName": "UNCP, UNC Pembroke, UNC at Pembroke",
    "city": "Pembroke",
    "country": "USA",
    "memberId": 1248,
    "memberName": "University of North Carolina at Pembroke",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.uncp.edu/"
  },
  {
    "alternateSearchName": "NAU",
    "city": "Stafford",
    "country": "USA",
    "memberId": 1249,
    "memberName": "North American University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.na.edu"
  },
  {
    "alternateSearchName": "FIU, Florida International, Florida Intl University",
    "city": "Miami",
    "country": "USA",
    "memberId": 1250,
    "memberName": "Florida International University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.fiu.edu/"
  },
  {
    "alternateSearchName": "JSU",
    "city": "Jackson",
    "country": "USA",
    "memberId": 1251,
    "memberName": "Jackson State University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.jsums.edu/"
  },
  {
    "alternateSearchName": "BSU, Ball State, Muncie, Indiana, MAC",
    "city": "Muncie",
    "country": "USA",
    "memberId": 1253,
    "memberName": "Ball State University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.bsu.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Fitchburg",
    "country": "USA",
    "memberId": 1254,
    "memberName": "Fitchburg State University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.fitchburgstate.edu/"
  },
  {
    "alternateSearchName": "SU, Shenandoah Univ, Shenandoah, Shen Univ",
    "city": "Winchester",
    "country": "USA",
    "memberId": 1255,
    "memberName": "Shenandoah University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.su.edu/"
  },
  {
    "alternateSearchName": "Michigan Tech, MTU, Michigan Technological University",
    "city": "Houghton",
    "country": "USA",
    "memberId": 1256,
    "memberName": "Michigan Technological University",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.mtu.edu"
  },
  {
    "alternateSearchName": "Texas A&M, tarelton, Texas",
    "city": "Stephenville",
    "country": "USA",
    "memberId": 1257,
    "memberName": "Tarleton State University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.tarleton.edu/home/"
  },
  {
    "alternateSearchName": "",
    "city": "EDINBURGH",
    "country": "GBR",
    "memberId": 1258,
    "memberName": "Edinburgh Napier University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.napier.ac.uk/"
  },
  {
    "alternateSearchName": "Miami Dade College, Miami Dade, MDC,",
    "city": "Miami",
    "country": "USA",
    "memberId": 1259,
    "memberName": "Miami Dade College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.mdc.edu/"
  },
  {
    "alternateSearchName": "UW Tacoma",
    "city": "Tacoma",
    "country": "USA",
    "memberId": 1260,
    "memberName": "University of Washington Tacoma",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.tacoma.uw.edu/"
  },
  {
    "alternateSearchName": "UNM, U New Mexico",
    "city": "Albuquerque",
    "country": "USA",
    "memberId": 1262,
    "memberName": "University of New Mexico",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.unm.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Savannah",
    "country": "USA",
    "memberId": 1263,
    "memberName": "Savannah State University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.savannahstate.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Rock Hill",
    "country": "USA",
    "memberId": 1264,
    "memberName": "Clinton College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.clintoncollege.edu/"
  },
  {
    "alternateSearchName": "ECSU, Elizabeth City, Elizabeth City State",
    "city": "Elizabeth City",
    "country": "USA",
    "memberId": 1265,
    "memberName": "Elizabeth City State University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.ecsu.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Chicago",
    "country": "USA",
    "memberId": 1266,
    "memberName": "St. Augustine College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.staugustine.edu/"
  },
  {
    "alternateSearchName": "UW Bothell",
    "city": "Bothell",
    "country": "USA",
    "memberId": 1268,
    "memberName": "University of Washington Bothell",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.uwb.edu/"
  },
  {
    "alternateSearchName": null,
    "city": "Durham",
    "country": "USA",
    "memberId": 1269,
    "memberName": "North Carolina Central University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.nccu.edu/"
  },
  {
    "alternateSearchName": "Ferrum",
    "city": "Ferrum",
    "country": "USA",
    "memberId": 1271,
    "memberName": "Ferrum College",
    "memberTypeDescription": "Coed",
    "webSite": "http://www.ferrum.edu"
  },
  {
    "alternateSearchName": "HSU, HSUTX, Hardin Simmons",
    "city": "Abilene",
    "country": "USA",
    "memberId": 1272,
    "memberName": "Hardin-Simmons University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.hsutx.edu/"
  },
  {
    "alternateSearchName": "UWRF",
    "city": "River Falls",
    "country": "USA",
    "memberId": 1273,
    "memberName": "University of Wisconsin - River Falls",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.uwrf.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Virginia Beach",
    "country": "USA",
    "memberId": 1274,
    "memberName": "Regent University",
    "memberTypeDescription": "Coed",
    "webSite": "http://regent.edu/"
  },
  {
    "alternateSearchName": null,
    "city": "Kirkland",
    "country": "USA",
    "memberId": 1275,
    "memberName": "Northwest University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.northwestu.edu"
  },
  {
    "alternateSearchName": "WWU, Western Washington, Dub Dub U",
    "city": "Bellingham",
    "country": "USA",
    "memberId": 1276,
    "memberName": "Western Washington University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.wwu.edu/"
  },
  {
    "alternateSearchName": "GVSU, Grand Valley, Grand Valley State, GV",
    "city": "Allendale",
    "country": "USA",
    "memberId": 1277,
    "memberName": "Grand Valley State University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.gvsu.edu/"
  },
  {
    "alternateSearchName": "CCS, Creative Studies, Center for Creative Studies, Detroit Society of Arts and Crafts, Society of Arts and Crafts, Center for Creative Studies—College of Art and Design, Center for Creative Studies College of Art and Design, CCSCAD",
    "city": "Detroit",
    "country": "USA",
    "memberId": 1280,
    "memberName": "College for Creative Studies",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.collegeforcreativestudies.edu"
  },
  {
    "alternateSearchName": "TXST, TSU, San Marcos, TX State",
    "city": "San Marcos",
    "country": "USA",
    "memberId": 1281,
    "memberName": "Texas State University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.txstate.edu/"
  },
  {
    "alternateSearchName": "Memphis, UofM, Univ.Memphis, Univ Memphis, University of Memphis, the University of Memphis, UM",
    "city": "Memphis",
    "country": "USA",
    "memberId": 1282,
    "memberName": "The University of Memphis",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.memphis.edu"
  },
  {
    "alternateSearchName": null,
    "city": "Cheney",
    "country": "USA",
    "memberId": 1283,
    "memberName": "Eastern Washington University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.ewu.edu"
  },
  {
    "alternateSearchName": "MVNU, Mount Vernon, MVNC, Mount Vernon Nazarene College",
    "city": "Mount Vernon",
    "country": "USA",
    "memberId": 1284,
    "memberName": "Mount Vernon Nazarene University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.mvnu.edu"
  },
  {
    "alternateSearchName": null,
    "city": "Athens",
    "country": "USA",
    "memberId": 1286,
    "memberName": "Concord University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.concord.edu/"
  },
  {
    "alternateSearchName": "SSU",
    "city": "Salem",
    "country": "USA",
    "memberId": 1287,
    "memberName": "Salem State University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.salemstate.edu/"
  },
  {
    "alternateSearchName": "Lenoir; Rhyne; LR",
    "city": "Hickory",
    "country": "USA",
    "memberId": 1288,
    "memberName": "Lenoir-Rhyne University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.lr.edu"
  },
  {
    "alternateSearchName": "",
    "city": "Misenheimer",
    "country": "USA",
    "memberId": 1289,
    "memberName": "Pfeiffer University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.pfeiffer.edu/"
  },
  {
    "alternateSearchName": "ARU",
    "city": "Cambridge",
    "country": "GBR",
    "memberId": 1290,
    "memberName": "Anglia Ruskin University",
    "memberTypeDescription": "Coed",
    "webSite": "https://aru.ac.uk/international"
  },
  {
    "alternateSearchName": null,
    "city": "Huntington",
    "country": "USA",
    "memberId": 1291,
    "memberName": "Huntington University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.huntington.edu"
  },
  {
    "alternateSearchName": "WVSU, State",
    "city": "Institute",
    "country": "USA",
    "memberId": 1292,
    "memberName": "West Virginia State University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.wvstateu.edu/"
  },
  {
    "alternateSearchName": "Roosevelt, RU",
    "city": "Chicago",
    "country": "USA",
    "memberId": 1293,
    "memberName": "Roosevelt University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.roosevelt.edu"
  },
  {
    "alternateSearchName": "WSSU, Winston Salem State University",
    "city": "Winston Salem",
    "country": "USA",
    "memberId": 1294,
    "memberName": "Winston-Salem State University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.wssu.edu"
  },
  {
    "alternateSearchName": "Taejae Digital University",
    "city": "Seoul",
    "country": "KOR",
    "memberId": 1296,
    "memberName": "Taejae University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.taejae.ac.kr/"
  },
  {
    "alternateSearchName": "schriener, shriner, schreiner college, shreiner, SU,schriner",
    "city": "Kerrville",
    "country": "USA",
    "memberId": 1298,
    "memberName": "Schreiner University",
    "memberTypeDescription": "Coed",
    "webSite": "https://schreiner.edu"
  },
  {
    "alternateSearchName": "UNR, Nevada, University of Nevada",
    "city": "Reno",
    "country": "USA",
    "memberId": 1299,
    "memberName": "University of Nevada-Reno",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.unr.edu/"
  },
  {
    "alternateSearchName": "VWU",
    "city": "Virginia Beach",
    "country": "USA",
    "memberId": 1300,
    "memberName": "Virginia Wesleyan University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.vwu.edu/"
  },
  {
    "alternateSearchName": null,
    "city": "Dublin",
    "country": "IRL",
    "memberId": 1302,
    "memberName": "Dublin City University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.dcu.ie/"
  },
  {
    "alternateSearchName": "SUNO, Southern University New Orleans, Southern University at New Orleans",
    "city": "New Orleans",
    "country": "USA",
    "memberId": 1303,
    "memberName": "Southern University at New Orleans (SUNO)",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.suno.edu/"
  },
  {
    "alternateSearchName": "Rutgers \n\nRutgers University \n\nRutgers, The State University of New Jersey \n\nRU \n\nRutgers-Camden \n\nRutgers-Newark \n\nRutgers-New Brunswick",
    "city": "Piscataway",
    "country": "USA",
    "memberId": 1304,
    "memberName": "Rutgers University",
    "memberTypeDescription": "Coed",
    "webSite": "https://rutgers.edu"
  },
  {
    "alternateSearchName": "ASU",
    "city": "San Angelo",
    "country": "USA",
    "memberId": 1306,
    "memberName": "Angelo State University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.angelo.edu/"
  },
  {
    "alternateSearchName": "CUNEF",
    "city": "Madrid",
    "country": "ESP",
    "memberId": 1309,
    "memberName": "CUNEF Universidad",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.cunef.edu/en/"
  },
  {
    "alternateSearchName": "Ohio Dominican,\nODU,\nPanthers",
    "city": "Columbus",
    "country": "USA",
    "memberId": 1310,
    "memberName": "Ohio Dominican University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.ohiodominican.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Marquette",
    "country": "USA",
    "memberId": 1311,
    "memberName": "Northern Michigan University",
    "memberTypeDescription": "Coed",
    "webSite": "https://nmu.edu/"
  },
  {
    "alternateSearchName": "BLC,",
    "city": "Mankato",
    "country": "USA",
    "memberId": 1312,
    "memberName": "Bethany Lutheran College",
    "memberTypeDescription": "Coed",
    "webSite": "https://blc.edu/"
  },
  {
    "alternateSearchName": "USI",
    "city": "Evansville",
    "country": "USA",
    "memberId": 1313,
    "memberName": "University of Southern Indiana",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.usi.edu"
  },
  {
    "alternateSearchName": "WKU, Western",
    "city": "Bowling Green",
    "country": "USA",
    "memberId": 1314,
    "memberName": "Western Kentucky University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.wku.edu/"
  },
  {
    "alternateSearchName": "GSU, Eagles, GS, Statesboro, Savannah, Liberty, Hinesville, Armstrong",
    "city": "Statesboro",
    "country": "USA",
    "memberId": 1315,
    "memberName": "Georgia Southern University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.georgiasouthern.edu/"
  },
  {
    "alternateSearchName": "OSU, Oklahoma State, Pistol Pete, Pokes, Land Grant",
    "city": "Stillwater",
    "country": "USA",
    "memberId": 1316,
    "memberName": "Oklahoma State University",
    "memberTypeDescription": "Coed",
    "webSite": "https://go.okstate.edu/"
  },
  {
    "alternateSearchName": "Campbell, CU",
    "city": "Buies Creek",
    "country": "USA",
    "memberId": 1317,
    "memberName": "Campbell University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.campbell.edu/"
  },
  {
    "alternateSearchName": null,
    "city": "Rochester",
    "country": "USA",
    "memberId": 1318,
    "memberName": "Oakland University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.oakland.edu/"
  },
  {
    "alternateSearchName": "Youngstown, YSU, Youngstown State",
    "city": "Youngstown",
    "country": "USA",
    "memberId": 1319,
    "memberName": "Youngstown State University",
    "memberTypeDescription": "Coordinate",
    "webSite": "https://ysu.edu"
  },
  {
    "alternateSearchName": "CSUP, Pueblo, Thunderwolves, Pack, Twolves, USC",
    "city": "Pueblo",
    "country": "USA",
    "memberId": 1320,
    "memberName": "Colorado State University Pueblo",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.csupueblo.edu/admissions/apply-now.html"
  },
  {
    "alternateSearchName": "",
    "city": "Talladega",
    "country": "USA",
    "memberId": 1323,
    "memberName": "Talladega College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.talladega.edu"
  },
  {
    "alternateSearchName": "VMI",
    "city": "Lexington",
    "country": "USA",
    "memberId": 1325,
    "memberName": "Virginia Military Institute",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.vmi.edu"
  },
  {
    "alternateSearchName": "CSU, CLSU",
    "city": "Morrow",
    "country": "USA",
    "memberId": 1326,
    "memberName": "Clayton State University",
    "memberTypeDescription": "Coed",
    "webSite": "https://clayton.edu/"
  },
  {
    "alternateSearchName": "UAH, UA Huntsville, UAHuntsville, Huntsville",
    "city": "Huntsville",
    "country": "USA",
    "memberId": 1327,
    "memberName": "The University of Alabama in Huntsville",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.uah.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "La Crosse",
    "country": "USA",
    "memberId": 1330,
    "memberName": "Viterbo University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.viterbo.edu/"
  },
  {
    "alternateSearchName": "MSU, Eagles, MSU Eagles",
    "city": "Morehead",
    "country": "USA",
    "memberId": 1331,
    "memberName": "Morehead State University",
    "memberTypeDescription": "Coed",
    "webSite": "https://moreheadstate.edu/"
  },
  {
    "alternateSearchName": "Westlake",
    "city": "Hangzhou",
    "country": "CHN",
    "memberId": 1332,
    "memberName": "Westlake University",
    "memberTypeDescription": "Coed",
    "webSite": "https://ugadmissions.westlake.edu.cn/"
  },
  {
    "alternateSearchName": "AUM",
    "city": "Montgomery",
    "country": "USA",
    "memberId": 1333,
    "memberName": "Auburn University at Montgomery",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.aum.edu/"
  },
  {
    "alternateSearchName": "JCSU, Golden Bulls, Johnson C. Smith",
    "city": "Charlotte",
    "country": "USA",
    "memberId": 1334,
    "memberName": "Johnson C Smith University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.jcsu.edu"
  },
  {
    "alternateSearchName": "SEU, Southeastern",
    "city": "Lakeland",
    "country": "USA",
    "memberId": 1336,
    "memberName": "Southeastern University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.seu.edu"
  },
  {
    "alternateSearchName": "The American College of the Mediterranean, Institute for American Universities",
    "city": "San Diego",
    "country": "USA",
    "memberId": 1337,
    "memberName": "American College of the Mediterranean (ACM)",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.acmfrance.org/"
  },
  {
    "alternateSearchName": "Roehampton University",
    "city": "London",
    "country": "GBR",
    "memberId": 1338,
    "memberName": "University of Roehampton, London",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.roehampton.ac.uk/international/countries/united-states-of-america/"
  },
  {
    "alternateSearchName": "",
    "city": "Washington",
    "country": "USA",
    "memberId": 1339,
    "memberName": "University of the District of Columbia",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.udc.edu/"
  },
  {
    "alternateSearchName": "WAU, Columbia Union, Adventist University, CUC, Adventist",
    "city": "Takoma Park",
    "country": "USA",
    "memberId": 1340,
    "memberName": "Washington Adventist University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.wau.edu/"
  },
  {
    "alternateSearchName": "UAF, University of Alaska",
    "city": "Fairbanks",
    "country": "USA",
    "memberId": 1342,
    "memberName": "University of Alaska Fairbanks",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.uaf.edu/"
  },
  {
    "alternateSearchName": "Esade, Business School, Law School, Barcelona, Spain",
    "city": "Sant Cugat del Vallès",
    "country": "ESP",
    "memberId": 1343,
    "memberName": "Esade Barcelona",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.esade.edu/bachelor/en"
  },
  {
    "alternateSearchName": null,
    "city": "Wichita",
    "country": "USA",
    "memberId": 1344,
    "memberName": "Newman University",
    "memberTypeDescription": "Coed",
    "webSite": "https://newmanu.edu"
  },
  {
    "alternateSearchName": "Geneva, GC, Beaver",
    "city": "Beaver Falls",
    "country": "USA",
    "memberId": 1345,
    "memberName": "Geneva College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.geneva.edu/"
  },
  {
    "alternateSearchName": "Houston Baptist University, HBU, HCU",
    "city": "Houston",
    "country": "USA",
    "memberId": 1346,
    "memberName": "Houston Christian University",
    "memberTypeDescription": "Coed",
    "webSite": "https://hc.edu"
  },
  {
    "alternateSearchName": "UST",
    "city": "Houston",
    "country": "USA",
    "memberId": 1347,
    "memberName": "University of St. Thomas - Houston",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.stthom.edu/"
  },
  {
    "alternateSearchName": "C-N, CNU",
    "city": "Jefferson",
    "country": "USA",
    "memberId": 1348,
    "memberName": "Carson-Newman University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.cn.edu/"
  },
  {
    "alternateSearchName": "PNCA",
    "city": "Portland",
    "country": "USA",
    "memberId": 1351,
    "memberName": "Pacific Northwest College of Art",
    "memberTypeDescription": "Coed",
    "webSite": "https://pnca.willamette.edu/"
  },
  {
    "alternateSearchName": null,
    "city": "Marietta",
    "country": "USA",
    "memberId": 1353,
    "memberName": "Life University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.life.edu/"
  },
  {
    "alternateSearchName": "FSU, Bulldogs,Ferris, Ferris State, Kendall, KCAD, Big Rapids, Grand Rapids, Art & Design",
    "city": "Big Rapids",
    "country": "USA",
    "memberId": 1355,
    "memberName": "Ferris State University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.ferris.edu/"
  },
  {
    "alternateSearchName": "USF",
    "city": "Sioux Falls",
    "country": "USA",
    "memberId": 1356,
    "memberName": "University of Sioux Falls",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.usiouxfalls.edu/"
  },
  {
    "alternateSearchName": "DCAD",
    "city": "Wilmington",
    "country": "USA",
    "memberId": 1357,
    "memberName": "Delaware College of Art and Design",
    "memberTypeDescription": "Coed",
    "webSite": "https://dcad.edu/"
  },
  {
    "alternateSearchName": null,
    "city": "Waleska",
    "country": "USA",
    "memberId": 1358,
    "memberName": "Reinhardt University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.reinhardt.edu/"
  },
  {
    "alternateSearchName": "NMT, New Mexico Tech",
    "city": "Socorro",
    "country": "USA",
    "memberId": 1360,
    "memberName": "New Mexico Institute of Mining and Technology",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.nmt.edu/"
  },
  {
    "alternateSearchName": "SFBU",
    "city": "Fremont",
    "country": "USA",
    "memberId": 1361,
    "memberName": "San Francisco Bay University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.sfbu.edu/"
  },
  {
    "alternateSearchName": "",
    "city": "Boston",
    "country": "USA",
    "memberId": 1362,
    "memberName": "City Year AmeriCorps Member - Year of Service",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.cityyear.org/"
  },
  {
    "alternateSearchName": "ECU",
    "city": "Ada",
    "country": "USA",
    "memberId": 1363,
    "memberName": "East Central University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.ecok.edu/"
  },
  {
    "alternateSearchName": "KCAI, KC Art Institute",
    "city": "Kansas City",
    "country": "USA",
    "memberId": 1364,
    "memberName": "Kansas City Art Institute",
    "memberTypeDescription": "Coed",
    "webSite": "https://kcai.edu/"
  },
  {
    "alternateSearchName": "CSM, College St. Mary",
    "city": "Omaha",
    "country": "USA",
    "memberId": 1365,
    "memberName": "College of Saint Mary",
    "memberTypeDescription": "Women",
    "webSite": "https://www.csm.edu"
  },
  {
    "alternateSearchName": "Harcum Junior College, Bears, Bryn Mawr, Philadelphia, Main Line, Manor College, Wilson College, Basketball, NJCAA, Vet, Nursing, Dental, Fashion, Interior Design",
    "city": "Bryn Mawr",
    "country": "USA",
    "memberId": 1366,
    "memberName": "Harcum College",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.harcum.edu/s/1044/bp20/home.aspx?sid=1044&gid=1"
  },
  {
    "alternateSearchName": "LU, Flames, Liberty",
    "city": "Lynchburg",
    "country": "USA",
    "memberId": 1367,
    "memberName": "Liberty University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.liberty.edu/?acode=R01140&utm_source=commonapp.org&utm_medium=referral&utm_campaign=common_app_profile&utm_content=profile_link"
  },
  {
    "alternateSearchName": "UVI, uvi.edu, virgin islands, usvi, buccaneers, st thomas, st croix, Caribbean, online, st martin, UVI@USM",
    "city": "Charlotte Amalie",
    "country": "USA",
    "memberId": 1368,
    "memberName": "University of the Virgin Islands",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.uvi.edu"
  },
  {
    "alternateSearchName": null,
    "city": "Salisbury",
    "country": "USA",
    "memberId": 1369,
    "memberName": "Livingstone College",
    "memberTypeDescription": "Coed",
    "webSite": "https://livingstone.edu/"
  },
  {
    "alternateSearchName": "CU, CU Bruins, Bruins",
    "city": "Winston-Salem",
    "country": "USA",
    "memberId": 1370,
    "memberName": "Carolina University",
    "memberTypeDescription": "Coed",
    "webSite": "https://carolinau.edu/"
  },
  {
    "alternateSearchName": "OBU, OKBU, Bison Hill",
    "city": "Shawnee",
    "country": "USA",
    "memberId": 1372,
    "memberName": "Oklahoma Baptist University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.okbu.edu/admissions/index.html"
  },
  {
    "alternateSearchName": null,
    "city": "Waynesburg",
    "country": "USA",
    "memberId": 1373,
    "memberName": "Waynesburg University",
    "memberTypeDescription": "Coed",
    "webSite": "https://www.waynesburg.edu/"
  }
]


// College model 
export interface College {
  alternateSearchName: string;
  city: string;
  country: string;
  memberId: number;
  memberName: string;
  memberTypeDescription: string;
  webSite: string;
}

@Injectable({
  providedIn: 'root'
})
export class CollegeService {

  constructor(private http: HttpClient) { }

  getColleges(): Observable<College[]> {
    return of(colleges);
  }
}

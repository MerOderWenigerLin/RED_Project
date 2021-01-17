import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import {StackOverflowResponse} from './stack-overflow-response';
import {environment} from '../../../environments/environment';

@Injectable()
export class SearchService {

  constructor(private http: Http) {
  }

  private generateUrl(pagesize: number): string {
    return `https://api.stackexchange.com/2.2/search?pagesize=${pagesize}&order=desc&sort=activity&site=stackoverflow&intitle=`;
  }

  search(keyword: string, pagesize: number): Observable<StackOverflowResponse> {
    if (environment.production) {
      return this.searchRequest(keyword, pagesize);
    } else {
      return this.searchMock(keyword, pagesize);
    }
  }

  private searchRequest(keyword: string, pagesize: number): Observable<StackOverflowResponse> {
    return this.http.get(this.generateUrl(pagesize) + keyword)
      .map((res: Response) => {
        const data = res.json();
        console.log('API USAGE: ' + data.quota_remaining + ' of ' + data.quota_max + ' requests available');
        return data as StackOverflowResponse;
      })
      .catch((err: Response) => Observable.of(err.json()));
  }

  private searchMock(keyword: string, pagesize: number): Observable<StackOverflowResponse> {
    return new Observable<StackOverflowResponse>(subscriber => {
      let resposne: StackOverflowResponse;
      switch (keyword.toUpperCase()) {
        case 'TYPESCRIPT' : {
          resposne = this.mockOfTypeScript();
          break;
        }
        case 'ANGULAR2' : {
          resposne = this.mockOfAngular2();
          break;
        }
        case 'WEATHER' : {
          resposne = this.mockOfWeather();
          break;
        }
      }
      resposne.items = resposne.items.slice(0, pagesize);
      subscriber.next(resposne);
      subscriber.complete();
    });
  }

  private mockOfTypeScript(): StackOverflowResponse {
    return {
      'items': [{
        'tags': ['javascript', 'typescript', 'parsing', 'identification'],
        'owner': {
          'reputation': 474,
          'user_id': 10273504,
          'user_type': 'registered',
          'profile_image': 'https://www.gravatar.com/avatar/08d07cc337b7d07de8f72bab2dbe2d63?s=128&d=identicon&r=PG&f=1',
          'display_name': 'JoePythonKing',
          'link': 'https://stackoverflow.com/users/10273504/joepythonking'
        },
        'is_answered': false,
        'view_count': 6,
        'answer_count': 0,
        'score': -1,
        'last_activity_date': 1610877679,
        'creation_date': 1610877679,
        'question_id': 65759293,
        'content_license': 'CC BY-SA 4.0',
        'link': 'https://stackoverflow.com/questions/65759293/how-do-i-identify-typescript-code-while-looking-at-it',
        'title': 'How do I identify typescript code while looking at it?'
      }, {
        'tags': ['javascript', 'html', 'typescript', 'electron'],
        'owner': {
          'reputation': 1,
          'user_id': 15023031,
          'user_type': 'registered',
          'profile_image': 'https://lh5.googleusercontent.com/-qNj_noo5dTo/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucneCnH5ZidYbXYknul8oNV-WVu20Q/s96-c/photo.jpg?sz=128',
          'display_name': 'Jacopo Grazioli',
          'link': 'https://stackoverflow.com/users/15023031/jacopo-grazioli'
        },
        'is_answered': false,
        'view_count': 12,
        'answer_count': 1,
        'score': 0,
        'last_activity_date': 1610877227,
        'creation_date': 1610876305,
        'question_id': 65759123,
        'content_license': 'CC BY-SA 4.0',
        'link': 'https://stackoverflow.com/questions/65759123/cannot-find-module-in-electron-app-with-typescript',
        'title': 'Cannot find Module in Electron app with typescript'
      }, {
        'tags': ['angular', 'angular8', 'ag-grid-angular'],
        'owner': {
          'reputation': 39,
          'user_id': 5398567,
          'user_type': 'registered',
          'profile_image': 'https://graph.facebook.com/974241212647107/picture?type=large',
          'display_name': 'Santhu',
          'link': 'https://stackoverflow.com/users/5398567/santhu'
        },
        'is_answered': false,
        'view_count': 11,
        'answer_count': 0,
        'score': 0,
        'last_activity_date': 1610876173,
        'creation_date': 1610736638,
        'last_edit_date': 1610876173,
        'question_id': 65741976,
        'content_license': 'CC BY-SA 4.0',
        'link': 'https://stackoverflow.com/questions/65741976/how-to-get-the-angular-ag-grid-quickfiltertext-search-results-on-typescript-meth',
        'title': 'How to get the Angular ag-grid quickFilterText search results on typescript method'
      }, {
        'tags': ['typescript', 'typescript-typings', 'typescript-generics'],
        'owner': {
          'reputation': 55,
          'user_id': 7759526,
          'user_type': 'registered',
          'profile_image': 'https://www.gravatar.com/avatar/885cd3fd9a2fa09d1ac8a95790af6515?s=128&d=identicon&r=PG&f=1',
          'display_name': 'almostalx',
          'link': 'https://stackoverflow.com/users/7759526/almostalx'
        },
        'is_answered': true,
        'view_count': 44,
        'accepted_answer_id': 65710309,
        'answer_count': 2,
        'score': 3,
        'last_activity_date': 1610875274,
        'creation_date': 1610561142,
        'question_id': 65707464,
        'content_license': 'CC BY-SA 4.0',
        'link': 'https://stackoverflow.com/questions/65707464/map-one-type-to-another-in-typescript',
        'title': 'Map one type to another in typescript'
      }, {
        'tags': ['typescript'],
        'owner': {
          'reputation': 23,
          'user_id': 15022766,
          'user_type': 'registered',
          'profile_image': 'https://lh3.googleusercontent.com/a-/AOh14Gg0kAzDc-Q7rlEjeD2wBzze5hMSKiv1ZlMfphTI=s96-c=k-s128',
          'display_name': 'ddd',
          'link': 'https://stackoverflow.com/users/15022766/ddd'
        },
        'is_answered': true,
        'view_count': 22,
        'accepted_answer_id': 65758975,
        'answer_count': 1,
        'score': 2,
        'last_activity_date': 1610875115,
        'creation_date': 1610872209,
        'question_id': 65758626,
        'content_license': 'CC BY-SA 4.0',
        'link': 'https://stackoverflow.com/questions/65758626/an-error-occurs-in-typescript-when-optional-chaining-is-specified-as-a-variable',
        'title': 'An error occurs in typescript when Optional Chaining is specified as a variable'
      }, {
        'tags': ['javascript', 'typescript', 'cytoscape.js', 'rollupjs'],
        'owner': {
          'reputation': 1,
          'user_id': 15019270,
          'user_type': 'registered',
          'profile_image': 'https://www.gravatar.com/avatar/750c5b5cf35f6ec8289e7bea54140700?s=128&d=identicon&r=PG&f=1',
          'display_name': 'Emile van Krieken',
          'link': 'https://stackoverflow.com/users/15019270/emile-van-krieken'
        },
        'is_answered': false,
        'view_count': 14,
        'answer_count': 1,
        'score': 0,
        'last_activity_date': 1610873663,
        'creation_date': 1610811097,
        'question_id': 65751315,
        'content_license': 'CC BY-SA 4.0',
        'link': 'https://stackoverflow.com/questions/65751315/error-initializing-cytoscape-with-typescript-and-rollup',
        'title': 'Error initializing Cytoscape with TypeScript and Rollup'
      }, {
        'tags': ['arrays', 'typescript', 'types', 'parameters', 'typeerror'],
        'owner': {
          'reputation': 24,
          'user_id': 14726782,
          'user_type': 'registered',
          'profile_image': 'https://www.gravatar.com/avatar/07afb83a74bbd0ce03614310d8d88209?s=128&d=identicon&r=PG&f=1',
          'display_name': 'Vatroslav Vrbanic',
          'link': 'https://stackoverflow.com/users/14726782/vatroslav-vrbanic'
        },
        'is_answered': false,
        'view_count': 29,
        'answer_count': 1,
        'score': 0,
        'last_activity_date': 1610872710,
        'creation_date': 1610837463,
        'last_edit_date': 1610852749,
        'question_id': 65755553,
        'content_license': 'CC BY-SA 4.0',
        'link': 'https://stackoverflow.com/questions/65755553/typescript-convert-parameters-array-to-tuple-array',
        'title': 'TypeScript Convert Parameters Array to Tuple Array'
      }, {
        'tags': ['javascript', 'typescript', 'types', 'promise'],
        'owner': {
          'reputation': 2333,
          'user_id': 443302,
          'user_type': 'registered',
          'accept_rate': 62,
          'profile_image': 'https://www.gravatar.com/avatar/7d02069ff600f99c6b597d7c9729ded9?s=128&d=identicon&r=PG',
          'display_name': 'Stewart',
          'link': 'https://stackoverflow.com/users/443302/stewart'
        },
        'is_answered': true,
        'view_count': 9842,
        'accepted_answer_id': 43712949,
        'answer_count': 1,
        'score': 52,
        'last_activity_date': 1610869526,
        'creation_date': 1493597782,
        'last_edit_date': 1610617747,
        'question_id': 43712705,
        'content_license': 'CC BY-SA 4.0',
        'link': 'https://stackoverflow.com/questions/43712705/why-does-typescript-use-like-types',
        'title': 'Why does TypeScript use &quot;Like&quot; types?'
      }, {
        'tags': ['reactjs', 'typescript', 'eslint', 'eslint-config-airbnb'],
        'owner': {
          'reputation': 753,
          'user_id': 4822666,
          'user_type': 'registered',
          'accept_rate': 52,
          'profile_image': 'https://i.stack.imgur.com/Fd2en.png?s=128&g=1',
          'display_name': 'meez',
          'link': 'https://stackoverflow.com/users/4822666/meez'
        },
        'is_answered': false,
        'view_count': 18,
        'answer_count': 0,
        'score': 0,
        'last_activity_date': 1610869004,
        'creation_date': 1610867869,
        'question_id': 65758194,
        'content_license': 'CC BY-SA 4.0',
        'link': 'https://stackoverflow.com/questions/65758194/airbnb-style-guide-eslint-setup-for-react-typescript-project',
        'title': 'Airbnb style guide ESLint setup for React Typescript project'
      }, {
        'tags': ['typescript', 'typechecking'],
        'owner': {
          'reputation': 899,
          'user_id': 3647245,
          'user_type': 'registered',
          'accept_rate': 67,
          'profile_image': 'https://i.stack.imgur.com/AqNnP.png?s=128&g=1',
          'display_name': 'Cedric Dumont',
          'link': 'https://stackoverflow.com/users/3647245/cedric-dumont'
        },
        'is_answered': false,
        'view_count': 23,
        'answer_count': 0,
        'score': 0,
        'last_activity_date': 1610868929,
        'creation_date': 1610813070,
        'last_edit_date': 1610868929,
        'question_id': 65751627,
        'content_license': 'CC BY-SA 4.0',
        'link': 'https://stackoverflow.com/questions/65751627/typescript-type-check-optional-parameter-in-a-function-passed-as-arguments',
        'title': 'typescript : type check optional parameter in a Function passed as arguments'
      }, {
        'tags': ['reactjs', 'typescript', 'npm', 'import', 'components'],
        'owner': {
          'reputation': 43,
          'user_id': 1116368,
          'user_type': 'registered',
          'profile_image': 'https://www.gravatar.com/avatar/746de0b1c14f829d0ab52450611b82dd?s=128&d=identicon&r=PG',
          'display_name': 'Yunus Kurniawan',
          'link': 'https://stackoverflow.com/users/1116368/yunus-kurniawan'
        },
        'is_answered': false,
        'view_count': 12,
        'answer_count': 0,
        'score': 0,
        'last_activity_date': 1610867583,
        'creation_date': 1610867583,
        'question_id': 65758169,
        'content_license': 'CC BY-SA 4.0',
        'link': 'https://stackoverflow.com/questions/65758169/react-app-with-typescript-import-tsx-from-node-modules-foo-component',
        'title': 'React App with Typescript - import tsx from node_modules/foo-component'
      }, {
        'tags': ['javascript', 'reactjs', 'typescript', 'amazon-s3'],
        'owner': {
          'reputation': 1,
          'user_id': 15016843,
          'user_type': 'registered',
          'profile_image': 'https://lh5.googleusercontent.com/-7UtZjY1KVgA/AAAAAAAAAAI/AAAAAAAADMs/AMZuucmHN5_FnUyL4LfyXLG9IsLAFIlybw/s96-c/photo.jpg?sz=128',
          'display_name': 'Ayyapan C',
          'link': 'https://stackoverflow.com/users/15016843/ayyapan-c'
        },
        'is_answered': false,
        'view_count': 11,
        'answer_count': 0,
        'score': 0,
        'last_activity_date': 1610862969,
        'creation_date': 1610862969,
        'question_id': 65757762,
        'content_license': 'CC BY-SA 4.0',
        'link': 'https://stackoverflow.com/questions/65757762/convert-file-of-any-formattxt-png-jpg-to-pdf-using-typescript',
        'title': 'convert file of any format(txt, png, jpg) to pdf using typescript'
      }, {
        'tags': ['typescript', 'unit-testing', 'babeljs', 'mocha.js', 'rewire'],
        'owner': {
          'reputation': 47235,
          'user_id': 298455,
          'user_type': 'registered',
          'accept_rate': 100,
          'profile_image': 'https://www.gravatar.com/avatar/c468d026f399d60f3cd9429c0964255e?s=128&d=identicon&r=PG',
          'display_name': 'Nishant',
          'link': 'https://stackoverflow.com/users/298455/nishant'
        },
        'is_answered': false,
        'view_count': 23,
        'bounty_amount': 100,
        'bounty_closes_date': 1611462568,
        'answer_count': 0,
        'score': 1,
        'last_activity_date': 1610862091,
        'creation_date': 1610652831,
        'last_edit_date': 1610862091,
        'question_id': 65725761,
        'content_license': 'CC BY-SA 4.0',
        'link': 'https://stackoverflow.com/questions/65725761/babel-plugin-rewire-does-not-work-in-a-typescript-project',
        'title': 'babel-plugin-rewire does not work in a Typescript project'
      }, {
        'tags': ['javascript', 'typescript', 'eslint', 'tslint'],
        'owner': {
          'reputation': 573,
          'user_id': 7727387,
          'user_type': 'registered',
          'profile_image': 'https://i.stack.imgur.com/IB9mC.png?s=128&g=1',
          'display_name': 'Zuckjet',
          'link': 'https://stackoverflow.com/users/7727387/zuckjet'
        },
        'is_answered': false,
        'view_count': 41,
        'answer_count': 0,
        'score': 0,
        'last_activity_date': 1610857841,
        'creation_date': 1610856678,
        'last_edit_date': 1610857841,
        'question_id': 65757254,
        'content_license': 'CC BY-SA 4.0',
        'link': 'https://stackoverflow.com/questions/65757254/what-does-undefined-means-in-typescript',
        'title': 'What does `undefined!` means in typescript?'
      }, {
        'tags': ['typescript', 'mixins'],
        'owner': {
          'reputation': 476,
          'user_id': 4738367,
          'user_type': 'registered',
          'accept_rate': 83,
          'profile_image': 'https://lh3.googleusercontent.com/-I-NDFCUiaJI/AAAAAAAAAAI/AAAAAAAABn0/QOGUWu7GDug/photo.jpg?sz=128',
          'display_name': 'Daniel de Andrade Varela',
          'link': 'https://stackoverflow.com/users/4738367/daniel-de-andrade-varela'
        },
        'is_answered': false,
        'view_count': 15,
        'answer_count': 0,
        'score': 1,
        'last_activity_date': 1610855289,
        'creation_date': 1610853936,
        'last_edit_date': 1610855289,
        'question_id': 65757042,
        'content_license': 'CC BY-SA 4.0',
        'link': 'https://stackoverflow.com/questions/65757042/how-to-properly-inject-type-of-an-method-or-property-to-before-mixin-a-given-sup',
        'title': 'how to properly inject type of an method or property to before mixin a given SuperClass in TypeScript'
      }, {
        'tags': ['angular', 'typescript', 'webpack', 'angular-compiler', 'angular-builder'],
        'owner': {
          'reputation': 565,
          'user_id': 3800647,
          'user_type': 'registered',
          'accept_rate': 86,
          'profile_image': 'https://i.stack.imgur.com/8Jqf4.jpg?s=128&g=1',
          'display_name': 'rkalita',
          'link': 'https://stackoverflow.com/users/3800647/rkalita'
        },
        'is_answered': false,
        'view_count': 33,
        'answer_count': 0,
        'score': 0,
        'last_activity_date': 1610855052,
        'creation_date': 1610814782,
        'last_edit_date': 1610855052,
        'question_id': 65751894,
        'content_license': 'CC BY-SA 4.0',
        'link': 'https://stackoverflow.com/questions/65751894/edit-typescript-before-angular-compiler',
        'title': 'Edit typescript before angular compiler'
      }, {
        'tags': ['javascript', 'reactjs', 'typescript', 'api', 'axios'],
        'owner': {
          'reputation': 3,
          'user_id': 14783774,
          'user_type': 'registered',
          'profile_image': 'https://lh3.googleusercontent.com/a-/AOh14Gh1OSnbAP8lIwJTryForodk_JGxbQ_cu5mMF67h=s96-c=k-s128',
          'display_name': 'Feras Antoon',
          'link': 'https://stackoverflow.com/users/14783774/feras-antoon'
        },
        'is_answered': false,
        'view_count': 15,
        'closed_date': 1610854868,
        'answer_count': 0,
        'score': 0,
        'last_activity_date': 1610854686,
        'creation_date': 1610854686,
        'question_id': 65757103,
        'link': 'https://stackoverflow.com/questions/65757103/map-is-not-a-function-react-typescript-api-axios-get-call',
        'closed_reason': 'Duplicate',
        'title': '.map is not a function - React Typescript (API axios Get call)'
      }, {
        'tags': ['typescript', 'rollupjs'],
        'owner': {
          'reputation': 229841,
          'user_id': 65387,
          'user_type': 'registered',
          'accept_rate': 66,
          'profile_image': 'https://www.gravatar.com/avatar/c0377fc1b08293d3362611978913a32b?s=128&d=identicon&r=PG',
          'display_name': 'mpen',
          'link': 'https://stackoverflow.com/users/65387/mpen'
        },
        'is_answered': false,
        'view_count': 7,
        'answer_count': 0,
        'score': 0,
        'last_activity_date': 1610852302,
        'creation_date': 1610852302,
        'question_id': 65756912,
        'content_license': 'CC BY-SA 4.0',
        'link': 'https://stackoverflow.com/questions/65756912/rollup-cant-find-shared-typescript-file',
        'title': 'Rollup: Can&#39;t find shared TypeScript file'
      }, {
        'tags': ['javascript', 'typescript'],
        'owner': {
          'reputation': 35,
          'user_id': 5786499,
          'user_type': 'registered',
          'profile_image': 'https://www.gravatar.com/avatar/d6ec5f648505d04753a37b3c9f73187b?s=128&d=identicon&r=PG&f=1',
          'display_name': 'wendtl',
          'link': 'https://stackoverflow.com/users/5786499/wendtl'
        },
        'is_answered': true,
        'view_count': 53,
        'answer_count': 1,
        'score': 0,
        'last_activity_date': 1610848878,
        'creation_date': 1610832408,
        'last_edit_date': 1610848878,
        'question_id': 65754909,
        'content_license': 'CC BY-SA 4.0',
        'link': 'https://stackoverflow.com/questions/65754909/check-if-variable-is-defined-in-typescript',
        'title': 'Check if variable is defined in Typescript?'
      }, {
        'tags': ['typescript', 'express', 'cookies', 'graphql'],
        'owner': {
          'reputation': 3187,
          'user_id': 10262805,
          'user_type': 'registered',
          'profile_image': 'https://i.stack.imgur.com/zQvN3.jpg?s=128&g=1',
          'display_name': 'Yilmaz',
          'link': 'https://stackoverflow.com/users/10262805/yilmaz'
        },
        'is_answered': false,
        'view_count': 6,
        'answer_count': 0,
        'score': 0,
        'last_activity_date': 1610848166,
        'creation_date': 1610848166,
        'question_id': 65756559,
        'content_license': 'CC BY-SA 4.0',
        'link': 'https://stackoverflow.com/questions/65756559/res-clearcookiecookie-name-is-not-clearing-the-cookie-in-graphql-express-types',
        'title': 'res.clearCookie(COOKIE_NAME) is not clearing the cookie in graphql-express-typescript'
      }], 'has_more': true, 'quota_max': 300, 'quota_remaining': 260
    } as StackOverflowResponse;
  }

  private mockOfAngular2(): StackOverflowResponse {
    return {
      'items': [{
        'tags': ['ui-grid'],
        'owner': {
          'reputation': 61,
          'user_id': 7209442,
          'user_type': 'registered',
          'profile_image': 'https://www.gravatar.com/avatar/3c78d24077fa85832c24ef397e19ec67?s=128&d=identicon&r=PG&f=1',
          'display_name': 'kiran kumar',
          'link': 'https://stackoverflow.com/users/7209442/kiran-kumar'
        },
        'is_answered': true,
        'view_count': 7927,
        'answer_count': 3,
        'score': 6,
        'last_activity_date': 1610837747,
        'creation_date': 1497432890,
        'question_id': 44540864,
        'content_license': 'CC BY-SA 3.0',
        'link': 'https://stackoverflow.com/questions/44540864/alternative-to-ui-griddoesnt-support-angular2-4',
        'title': 'Alternative to ui-grid(doesn&#39;t support angular2/4)'
      }, {
        'tags': ['angular', 'angular2-routing', 'angular2-template'],
        'owner': {
          'reputation': 1069,
          'user_id': 5742747,
          'user_type': 'registered',
          'profile_image': 'https://www.gravatar.com/avatar/1d2fdaa73c43b90399f66d5369120cc9?s=128&d=identicon&r=PG&f=1',
          'display_name': 'Islam Shaheen',
          'link': 'https://stackoverflow.com/users/5742747/islam-shaheen'
        },
        'is_answered': true,
        'view_count': 114938,
        'answer_count': 7,
        'score': 84,
        'last_activity_date': 1610812560,
        'creation_date': 1452069987,
        'last_edit_date': 1541140796,
        'question_id': 34628848,
        'content_license': 'CC BY-SA 4.0',
        'link': 'https://stackoverflow.com/questions/34628848/angular2-multiple-router-outlet-in-the-same-template',
        'title': 'Angular2 multiple router-outlet in the same template'
      }, {
        'tags': ['angular'],
        'owner': {
          'reputation': 4207,
          'user_id': 1773233,
          'user_type': 'registered',
          'accept_rate': 58,
          'profile_image': 'https://i.stack.imgur.com/OuUHu.jpg?s=128&g=1',
          'display_name': 'surfealokesea',
          'link': 'https://stackoverflow.com/users/1773233/surfealokesea'
        },
        'is_answered': true,
        'view_count': 15293,
        'accepted_answer_id': 39286963,
        'answer_count': 1,
        'score': 8,
        'last_activity_date': 1610754876,
        'creation_date': 1472798849,
        'last_edit_date': 1610754876,
        'question_id': 39285955,
        'content_license': 'CC BY-SA 4.0',
        'link': 'https://stackoverflow.com/questions/39285955/angular2-attribute-directive-hostbinding-to-host-attribute',
        'title': 'Angular2 attribute directive Hostbinding to host attribute'
      }, {
        'tags': ['angular', 'angular11'],
        'owner': {
          'reputation': 1,
          'user_id': 15015056,
          'user_type': 'registered',
          'profile_image': 'https://www.gravatar.com/avatar/2714286b01d60017d03d396eb03691ef?s=128&d=identicon&r=PG&f=1',
          'display_name': 'Shudry',
          'link': 'https://stackoverflow.com/users/15015056/shudry'
        },
        'is_answered': false,
        'view_count': 33,
        'answer_count': 0,
        'score': -1,
        'last_activity_date': 1610744087,
        'creation_date': 1610744087,
        'question_id': 65743413,
        'content_license': 'CC BY-SA 4.0',
        'link': 'https://stackoverflow.com/questions/65743413/angular2-bind-variable-in-child-component-with-realtime-changes',
        'title': 'Angular2. Bind variable in child component with realtime changes'
      }, {
        'tags': ['angular'],
        'owner': {
          'reputation': 701,
          'user_id': 1950699,
          'user_type': 'registered',
          'accept_rate': 20,
          'profile_image': 'https://www.gravatar.com/avatar/78ba1184d17bd5c92bda12d75507e427?s=128&d=identicon&r=PG',
          'display_name': 'Павел Куликов',
          'link': 'https://stackoverflow.com/users/1950699/%d0%9f%d0%b0%d0%b2%d0%b5%d0%bb-%d0%9a%d1%83%d0%bb%d0%b8%d0%ba%d0%be%d0%b2'
        },
        'is_answered': true,
        'view_count': 86800,
        'accepted_answer_id': 36223355,
        'answer_count': 8,
        'score': 48,
        'last_activity_date': 1610717380,
        'creation_date': 1458919685,
        'last_edit_date': 1585180570,
        'question_id': 36222845,
        'content_license': 'CC BY-SA 4.0',
        'link': 'https://stackoverflow.com/questions/36222845/get-domain-name-for-service-in-angular2',
        'title': 'Get domain name for service in Angular2'
      }, {
        'tags': ['javascript', 'angular', 'onblur'],
        'owner': {
          'reputation': 3117,
          'user_id': 5668294,
          'user_type': 'registered',
          'accept_rate': 83,
          'profile_image': 'https://www.gravatar.com/avatar/39789f38b228d00b0f2cd946c84f0110?s=128&d=identicon&r=PG&f=1',
          'display_name': 'Ignat',
          'link': 'https://stackoverflow.com/users/5668294/ignat'
        },
        'is_answered': true,
        'view_count': 228074,
        'accepted_answer_id': 34918214,
        'answer_count': 7,
        'score': 124,
        'last_activity_date': 1610709716,
        'creation_date': 1453362969,
        'last_edit_date': 1496497581,
        'question_id': 34918198,
        'content_license': 'CC BY-SA 3.0',
        'link': 'https://stackoverflow.com/questions/34918198/how-to-use-onblur-event-on-angular2',
        'title': 'How to use onBlur event on Angular2?'
      }, {
        'tags': ['json', 'angular', 'typescript', 'datagrid'],
        'owner': {
          'reputation': 214,
          'user_id': 825291,
          'user_type': 'registered',
          'accept_rate': 50,
          'profile_image': 'https://www.gravatar.com/avatar/ea02ca5299ac58f87a3f56b6151ecef7?s=128&d=identicon&r=PG',
          'display_name': 'Beaker',
          'link': 'https://stackoverflow.com/users/825291/beaker'
        },
        'is_answered': false,
        'view_count': 7926,
        'answer_count': 1,
        'score': 1,
        'last_activity_date': 1610647615,
        'creation_date': 1473761944,
        'question_id': 39467596,
        'content_license': 'CC BY-SA 3.0',
        'link': 'https://stackoverflow.com/questions/39467596/how-to-create-a-table-in-angular2-using-json',
        'title': 'how to create a table in Angular2 using json'
      }, {
        'tags': ['html', 'angular', 'input', 'angularjs-directive'],
        'owner': {
          'reputation': 1490,
          'user_id': 2562477,
          'user_type': 'registered',
          'accept_rate': 69,
          'profile_image': 'https://graph.facebook.com/586496218/picture?type=large',
          'display_name': 'Aniruddha Pondhe',
          'link': 'https://stackoverflow.com/users/2562477/aniruddha-pondhe'
        },
        'is_answered': true,
        'view_count': 260009,
        'protected_date': 1605093795,
        'answer_count': 37,
        'score': 88,
        'last_activity_date': 1610637409,
        'creation_date': 1483538190,
        'last_edit_date': 1568749179,
        'question_id': 41465542,
        'content_license': 'CC BY-SA 4.0',
        'link': 'https://stackoverflow.com/questions/41465542/angular2-input-field-to-accept-only-numbers',
        'title': 'Angular2 - Input Field To Accept Only Numbers'
      }, {
        'tags': ['angular'],
        'owner': {
          'reputation': 1,
          'user_id': 14999639,
          'user_type': 'registered',
          'profile_image': 'https://lh3.googleusercontent.com/-iomXjdvNYdE/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckqYM_yyeO4paXzUa3Bwv6JUoLkcQ/s96-c/photo.jpg?sz=128',
          'display_name': 'jbtd',
          'link': 'https://stackoverflow.com/users/14999639/jbtd'
        },
        'is_answered': false,
        'view_count': 20,
        'answer_count': 0,
        'score': 0,
        'last_activity_date': 1610636559,
        'creation_date': 1610571791,
        'last_edit_date': 1610636559,
        'question_id': 65709745,
        'content_license': 'CC BY-SA 4.0',
        'link': 'https://stackoverflow.com/questions/65709745/angular2-test-generate-event-for-fromevent-on-jquery-bootstrap-event',
        'title': 'Angular2+ - Test generate event for fromEvent on jquery / bootstrap event'
      }, {
        'tags': ['forms', 'angular', 'validation'],
        'owner': {
          'reputation': 1599,
          'user_id': 3892439,
          'user_type': 'registered',
          'accept_rate': 55,
          'profile_image': 'https://i.stack.imgur.com/BkUb1.jpg?s=128&g=1',
          'display_name': 'vigamage',
          'link': 'https://stackoverflow.com/users/3892439/vigamage'
        },
        'is_answered': true,
        'view_count': 5507,
        'answer_count': 6,
        'score': 6,
        'last_activity_date': 1610626098,
        'creation_date': 1495192718,
        'question_id': 44068699,
        'content_license': 'CC BY-SA 3.0',
        'link': 'https://stackoverflow.com/questions/44068699/form-gets-invalid-after-form-reset-angular2',
        'title': 'Form gets invalid after form.reset() - Angular2'
      }, {
        'tags': ['angular', 'cookies', 'azure-devops', 'angular2-cookie'],
        'owner': {
          'reputation': 51,
          'user_id': 10859710,
          'user_type': 'registered',
          'profile_image': 'https://i.stack.imgur.com/ky3t7.jpg?s=128&g=1',
          'display_name': 'Alex',
          'link': 'https://stackoverflow.com/users/10859710/alex'
        },
        'is_answered': true,
        'view_count': 17,
        'answer_count': 1,
        'score': 0,
        'last_activity_date': 1610600036,
        'creation_date': 1610570331,
        'question_id': 65709445,
        'content_license': 'CC BY-SA 4.0',
        'link': 'https://stackoverflow.com/questions/65709445/angular2-cookie-prevents-build-in-azuredevops',
        'title': 'Angular2-Cookie Prevents build in AzureDevOps'
      }, {
        'tags': ['angular', 'angular-material2'],
        'owner': {
          'reputation': 677,
          'user_id': 1815144,
          'user_type': 'registered',
          'accept_rate': 89,
          'profile_image': 'https://i.stack.imgur.com/D05xK.jpg?s=128&g=1',
          'display_name': 'Mahin Khan',
          'link': 'https://stackoverflow.com/users/1815144/mahin-khan'
        },
        'is_answered': true,
        'view_count': 33292,
        'accepted_answer_id': 42006623,
        'answer_count': 11,
        'score': 12,
        'last_activity_date': 1610591080,
        'creation_date': 1486050738,
        'last_edit_date': 1518040318,
        'question_id': 42006622,
        'content_license': 'CC BY-SA 3.0',
        'link': 'https://stackoverflow.com/questions/42006622/how-to-unselect-selected-option-in-md-select-angular2',
        'title': 'How to unselect selected option in md-select Angular2'
      }, {
        'tags': ['angular', 'oauth-2.0', 'access-token', 'browser-history'],
        'owner': {
          'reputation': 125,
          'user_id': 7616817,
          'user_type': 'registered',
          'profile_image': 'https://i.stack.imgur.com/vyRvs.jpg?s=128&g=1',
          'display_name': 'user7616817',
          'link': 'https://stackoverflow.com/users/7616817/user7616817'
        },
        'is_answered': false,
        'view_count': 8,
        'answer_count': 0,
        'score': 0,
        'last_activity_date': 1610567248,
        'creation_date': 1610567248,
        'question_id': 65708822,
        'content_license': 'CC BY-SA 4.0',
        'link': 'https://stackoverflow.com/questions/65708822/angular2-oauth2-0-handle-token-and-update-history',
        'title': 'angular2 Oauth2.0 handle token and update history'
      }, {
        'tags': ['json', 'angular', 'typescript', 'query-string'],
        'owner': {
          'reputation': 1010,
          'user_id': 5241718,
          'user_type': 'registered',
          'accept_rate': 100,
          'profile_image': 'https://www.gravatar.com/avatar/a6ba4d9b4d8096017ef116318582a5fc?s=128&d=identicon&r=PG&f=1',
          'display_name': 'Sivaprasad derangula',
          'link': 'https://stackoverflow.com/users/5241718/sivaprasad-derangula'
        },
        'is_answered': true,
        'view_count': 19864,
        'accepted_answer_id': 41762705,
        'answer_count': 3,
        'score': 19,
        'last_activity_date': 1610547813,
        'creation_date': 1484908491,
        'last_edit_date': 1484909384,
        'question_id': 41761523,
        'content_license': 'CC BY-SA 3.0',
        'link': 'https://stackoverflow.com/questions/41761523/how-to-convert-json-to-query-string-in-angular2',
        'title': 'How to convert JSON to query string in angular2?'
      }, {
        'tags': ['angular'],
        'owner': {
          'reputation': 23,
          'user_id': 5750733,
          'user_type': 'registered',
          'accept_rate': 0,
          'profile_image': 'https://graph.facebook.com/1044404025602135/picture?type=large',
          'display_name': 'Ayush Gupta',
          'link': 'https://stackoverflow.com/users/5750733/ayush-gupta'
        },
        'is_answered': true,
        'view_count': 1715,
        'accepted_answer_id': 48395408,
        'answer_count': 1,
        'score': 1,
        'last_activity_date': 1610539483,
        'creation_date': 1515048842,
        'last_edit_date': 1515049245,
        'question_id': 48090134,
        'content_license': 'CC BY-SA 3.0',
        'link': 'https://stackoverflow.com/questions/48090134/in-angular2-this-fieldref-nativeelement-focus-is-not-working-in-ios-devices',
        'title': 'In angular2 this.fieldRef.nativeElement.focus(); is not working in IOS devices'
      }, {
        'tags': ['angular'],
        'owner': {
          'reputation': 4533,
          'user_id': 2756466,
          'user_type': 'registered',
          'accept_rate': 39,
          'profile_image': 'https://www.gravatar.com/avatar/4a3e47c2c2ab8b976ba7b37737a285e6?s=128&d=identicon&r=PG&f=1',
          'display_name': 'raju',
          'link': 'https://stackoverflow.com/users/2756466/raju'
        },
        'is_answered': false,
        'view_count': 4418,
        'answer_count': 1,
        'score': 0,
        'last_activity_date': 1610478604,
        'creation_date': 1512366184,
        'last_edit_date': 1610478604,
        'question_id': 47627175,
        'content_license': 'CC BY-SA 4.0',
        'link': 'https://stackoverflow.com/questions/47627175/debugelement-is-undefined-in-angular2-test',
        'title': 'DebugElement is undefined in angular2 test'
      }, {
        'tags': ['unit-testing', 'angular', 'mocking', 'jasmine'],
        'owner': {
          'reputation': 5170,
          'user_id': 3103015,
          'user_type': 'registered',
          'accept_rate': 64,
          'profile_image': 'https://graph.facebook.com/1547013557/picture?type=large',
          'display_name': 'stijn.aerts',
          'link': 'https://stackoverflow.com/users/3103015/stijn-aerts'
        },
        'is_answered': true,
        'view_count': 21663,
        'protected_date': 1525911721,
        'accepted_answer_id': 39033248,
        'answer_count': 7,
        'score': 24,
        'last_activity_date': 1610476458,
        'creation_date': 1469000864,
        'question_id': 38475342,
        'content_license': 'CC BY-SA 3.0',
        'link': 'https://stackoverflow.com/questions/38475342/mocking-router-events-subscribe-angular2',
        'title': 'Mocking router.events.subscribe() Angular2'
      }, {
        'tags': ['angular'],
        'owner': {
          'reputation': 1337,
          'user_id': 4619822,
          'user_type': 'registered',
          'accept_rate': 59,
          'profile_image': 'https://i.stack.imgur.com/BMRDd.jpg?s=128&g=1',
          'display_name': 'PrinceZee',
          'link': 'https://stackoverflow.com/users/4619822/princezee'
        },
        'is_answered': true,
        'view_count': 232497,
        'accepted_answer_id': 36366800,
        'answer_count': 4,
        'score': 93,
        'last_activity_date': 1610454621,
        'creation_date': 1459547320,
        'question_id': 36366375,
        'content_license': 'CC BY-SA 3.0',
        'link': 'https://stackoverflow.com/questions/36366375/onchange-equivalent-in-angular2',
        'title': 'onchange equivalent in angular2'
      }, {
        'tags': ['angular'],
        'owner': {
          'reputation': 61,
          'user_id': 5917201,
          'user_type': 'registered',
          'profile_image': 'https://lh3.googleusercontent.com/-xQBJtPz69yU/AAAAAAAAAAI/AAAAAAAAAEs/YOlMPulQZ0A/photo.jpg?sz=128',
          'display_name': 'Siggi Gr&#252;nwald',
          'link': 'https://stackoverflow.com/users/5917201/siggi-gr%c3%bcnwald'
        },
        'is_answered': true,
        'view_count': 9069,
        'answer_count': 4,
        'score': 3,
        'last_activity_date': 1610454032,
        'creation_date': 1464296235,
        'question_id': 37470852,
        'content_license': 'CC BY-SA 3.0',
        'link': 'https://stackoverflow.com/questions/37470852/angular2-set-active-tab-on-init',
        'title': 'angular2 set active tab on init'
      }, {
        'tags': ['angular', 'angular2-forms'],
        'owner': {
          'reputation': 251,
          'user_id': 5003415,
          'user_type': 'registered',
          'profile_image': 'https://graph.facebook.com/10207218196320345/picture?type=large',
          'display_name': 'Arman Gevorgyan',
          'link': 'https://stackoverflow.com/users/5003415/arman-gevorgyan'
        },
        'is_answered': true,
        'view_count': 34808,
        'answer_count': 15,
        'score': 21,
        'last_activity_date': 1610440111,
        'creation_date': 1492404633,
        'last_edit_date': 1492416190,
        'question_id': 43445315,
        'content_license': 'CC BY-SA 3.0',
        'link': 'https://stackoverflow.com/questions/43445315/angular2-reactive-forms-delete-error',
        'title': 'Angular2 reactive forms delete error'
      }], 'has_more': true, 'quota_max': 300, 'quota_remaining': 260
    } as StackOverflowResponse;
  }

  private mockOfWeather(): StackOverflowResponse {
    return {
      'items': [{
        'tags': ['javascript', 'html', 'express'],
        'owner': {
          'reputation': 57,
          'user_id': 9378137,
          'user_type': 'registered',
          'profile_image': 'https://i.stack.imgur.com/IB48g.jpg?s=128&g=1',
          'display_name': 'G. Trialonis',
          'link': 'https://stackoverflow.com/users/9378137/g-trialonis'
        },
        'is_answered': true,
        'view_count': 69,
        'answer_count': 1,
        'score': 0,
        'last_activity_date': 1610826675,
        'creation_date': 1609704115,
        'last_edit_date': 1610826675,
        'question_id': 65554363,
        'content_license': 'CC BY-SA 4.0',
        'link': 'https://stackoverflow.com/questions/65554363/how-to-send-weather-info-from-server-to-an-html-text-area-box',
        'title': 'How to send weather info from server to an html text area box?'
      }, {
        'tags': ['jquery', 'weather', 'weather-api'],
        'owner': {
          'reputation': 1,
          'user_id': 14996665,
          'user_type': 'registered',
          'profile_image': 'https://lh3.googleusercontent.com/a-/AOh14GhbCQM5wPUaCkpjM_lEcI2q9zEaaJZ_5s32Ngl6=s96-c=k-s128',
          'display_name': 'K D',
          'link': 'https://stackoverflow.com/users/14996665/k-d'
        },
        'is_answered': false,
        'view_count': 14,
        'answer_count': 0,
        'score': 0,
        'last_activity_date': 1610536972,
        'creation_date': 1610528329,
        'last_edit_date': 1610536972,
        'question_id': 65698557,
        'content_license': 'CC BY-SA 4.0',
        'link': 'https://stackoverflow.com/questions/65698557/using-weather-data-from-api-call-with-jquery',
        'title': 'Using weather data from API call with JQuery'
      }, {
        'tags': ['javascript', 'json', 'reactjs'],
        'owner': {
          'reputation': 33,
          'user_id': 13382805,
          'user_type': 'registered',
          'profile_image': 'https://lh4.googleusercontent.com/-fkKUcskO4Mg/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJOYNVz_PsQVolcN_peqeQIheG8Qxg/photo.jpg?sz=128',
          'display_name': 'Peppa Box',
          'link': 'https://stackoverflow.com/users/13382805/peppa-box'
        },
        'is_answered': false,
        'view_count': 22,
        'answer_count': 0,
        'score': 0,
        'last_activity_date': 1610516955,
        'creation_date': 1610516955,
        'question_id': 65696328,
        'content_license': 'CC BY-SA 4.0',
        'link': 'https://stackoverflow.com/questions/65696328/issue-storing-weather-data-from-api-using-react-and-json-sever',
        'title': 'Issue storing weather data from API using react and JSON-sever'
      }, {
        'tags': ['clojure'],
        'owner': {'user_type': 'does_not_exist', 'display_name': 'user14919814'},
        'is_answered': true,
        'view_count': 68,
        'accepted_answer_id': 65693913,
        'answer_count': 1,
        'score': 3,
        'last_activity_date': 1610496757,
        'creation_date': 1610495553,
        'question_id': 65693739,
        'content_license': 'CC BY-SA 4.0',
        'link': 'https://stackoverflow.com/questions/65693739/clojure-how-would-you-pull-weather-data-from-a-link-and-then-work-out-the-warme',
        'title': 'Clojure- How would you pull weather data from a link and then work out the warmest day of each calendar month'
      }, {
        'tags': ['javascript', 'json', 'reactjs', 'api', 'json-server'],
        'owner': {
          'reputation': 33,
          'user_id': 13382805,
          'user_type': 'registered',
          'profile_image': 'https://lh4.googleusercontent.com/-fkKUcskO4Mg/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJOYNVz_PsQVolcN_peqeQIheG8Qxg/photo.jpg?sz=128',
          'display_name': 'Peppa Box',
          'link': 'https://stackoverflow.com/users/13382805/peppa-box'
        },
        'is_answered': false,
        'view_count': 15,
        'answer_count': 0,
        'score': 0,
        'last_activity_date': 1610461907,
        'creation_date': 1610461907,
        'question_id': 65685973,
        'content_license': 'CC BY-SA 4.0',
        'link': 'https://stackoverflow.com/questions/65685973/json-server-api-request-from-two-apis-i-need-to-enter-a-postcode-and-return-we',
        'title': 'JSON-Server API request from two api&#39;s. I need to enter a postcode and return weather information'
      }, {
        'tags': ['javascript', 'jquery', 'json', 'local-storage', 'openweathermap'],
        'owner': {
          'reputation': 1,
          'user_id': 14593232,
          'user_type': 'registered',
          'profile_image': 'https://lh6.googleusercontent.com/-aoSY7zab1Ek/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmIrXb5y4zVoSeqMf1Y8DAAl82-Ew/s96-c/photo.jpg?sz=128',
          'display_name': 'Jakub Drobil',
          'link': 'https://stackoverflow.com/users/14593232/jakub-drobil'
        },
        'is_answered': false,
        'view_count': 26,
        'answer_count': 0,
        'score': 0,
        'last_activity_date': 1610365301,
        'creation_date': 1609858207,
        'last_edit_date': 1610365301,
        'question_id': 65581171,
        'content_license': 'CC BY-SA 4.0',
        'link': 'https://stackoverflow.com/questions/65581171/creating-an-add-to-favorites-list-for-my-weather-app-js-localstorage',
        'title': 'Creating an add to favorites list for my weather app JS / localStorage'
      }, {
        'tags': ['python', 'pvlib'],
        'owner': {
          'reputation': 41,
          'user_id': 7878700,
          'user_type': 'registered',
          'profile_image': 'https://www.gravatar.com/avatar/b54e711debfefee5f4f59275f0da8f7b?s=128&d=identicon&r=PG&f=1',
          'display_name': 'srlightfoote',
          'link': 'https://stackoverflow.com/users/7878700/srlightfoote'
        },
        'is_answered': true,
        'view_count': 119,
        'answer_count': 2,
        'score': 4,
        'last_activity_date': 1610139496,
        'creation_date': 1534353942,
        'question_id': 51863542,
        'content_license': 'CC BY-SA 4.0',
        'link': 'https://stackoverflow.com/questions/51863542/using-modelchain-with-plane-of-array-poa-as-weather-input',
        'title': 'Using ModelChain with Plane of Array (POA) as weather input'
      }, {
        'tags': ['javascript', 'html', 'node.js', 'api', 'express'],
        'owner': {
          'reputation': 1,
          'user_id': 14956804,
          'user_type': 'registered',
          'profile_image': 'https://lh3.googleusercontent.com/a-/AOh14GgoM2wXOdiJtbRC-ny4hd3zIjBZp_pkJReiTMiwEw=s96-c=k-s128',
          'display_name': 'Hibathulla Cm',
          'link': 'https://stackoverflow.com/users/14956804/hibathulla-cm'
        },
        'is_answered': false,
        'view_count': 30,
        'closed_date': 1610093910,
        'answer_count': 2,
        'score': -1,
        'last_activity_date': 1610007243,
        'creation_date': 1610003852,
        'last_edit_date': 1610006404,
        'question_id': 65608081,
        'link': 'https://stackoverflow.com/questions/65608081/how-to-design-the-node-js-weather-app-project-using-html',
        'closed_reason': 'Needs details or clarity',
        'title': 'How to design the node.js weather app project using html'
      }, {
        'tags': ['r', 'date', 'append', 'iteration', 'wunderground'],
        'owner': {
          'reputation': 127,
          'user_id': 11515487,
          'user_type': 'registered',
          'profile_image': 'https://www.gravatar.com/avatar/32c8d8f0ee3d7ed819dcb45921342a42?s=128&d=identicon&r=PG&f=1',
          'display_name': 'EllisR8',
          'link': 'https://stackoverflow.com/users/11515487/ellisr8'
        },
        'is_answered': true,
        'view_count': 2614,
        'answer_count': 1,
        'score': 2,
        'last_activity_date': 1609994917,
        'creation_date': 1570801254,
        'question_id': 58342525,
        'content_license': 'CC BY-SA 4.0',
        'link': 'https://stackoverflow.com/questions/58342525/how-to-extract-data-from-weather-underground-wunderground-into-csv-files',
        'title': 'How to extract data from weather underground (wunderground) into csv files'
      }, {
        'tags': ['mysql', 'database'],
        'owner': {
          'reputation': 11,
          'user_id': 10481923,
          'user_type': 'registered',
          'profile_image': 'https://www.gravatar.com/avatar/aeffde57e0611aa49f79b751241afe5a?s=128&d=identicon&r=PG&f=1',
          'display_name': 'tysonh',
          'link': 'https://stackoverflow.com/users/10481923/tysonh'
        },
        'is_answered': false,
        'view_count': 32,
        'answer_count': 0,
        'score': 0,
        'last_activity_date': 1609986665,
        'creation_date': 1609986665,
        'question_id': 65605896,
        'content_license': 'CC BY-SA 4.0',
        'link': 'https://stackoverflow.com/questions/65605896/how-should-i-store-weather-station-data',
        'title': 'How should I store weather station data?'
      }, {
        'tags': ['javascript', 'html', 'json', 'openweathermap'],
        'owner': {
          'reputation': 1,
          'user_id': 9642292,
          'user_type': 'registered',
          'profile_image': 'https://lh5.googleusercontent.com/-OMRnbCJReF0/AAAAAAAAAAI/AAAAAAAA7c0/I25SrTG7ggM/photo.jpg?sz=128',
          'display_name': 'Dani A.',
          'link': 'https://stackoverflow.com/users/9642292/dani-a'
        },
        'is_answered': false,
        'view_count': 25,
        'answer_count': 0,
        'score': 0,
        'last_activity_date': 1609975394,
        'creation_date': 1609975394,
        'question_id': 65604633,
        'content_license': 'CC BY-SA 4.0',
        'link': 'https://stackoverflow.com/questions/65604633/get-current-weather-in-html-js-with-api-openwweathermap',
        'title': 'Get current weather in html/JS with api openwweathermap'
      }, {
        'tags': ['weather'],
        'owner': {
          'reputation': 29,
          'user_id': 14629030,
          'user_type': 'registered',
          'profile_image': 'https://www.gravatar.com/avatar/fe790cce5ba4cdc06baad9b53bd935c6?s=128&d=identicon&r=PG&f=1',
          'display_name': 'Bartek',
          'link': 'https://stackoverflow.com/users/14629030/bartek'
        },
        'is_answered': false,
        'view_count': 12,
        'answer_count': 1,
        'score': -1,
        'last_activity_date': 1609867666,
        'creation_date': 1609866935,
        'question_id': 65583523,
        'content_license': 'CC BY-SA 4.0',
        'link': 'https://stackoverflow.com/questions/65583523/there-is-all-weather-description-for-openweatherapi',
        'title': 'There is all weather description for OpenWeatherAPI?'
      }, {
        'tags': ['reactjs'],
        'owner': {
          'reputation': 3,
          'user_id': 14486726,
          'user_type': 'registered',
          'profile_image': 'https://lh3.googleusercontent.com/a-/AOh14Ggup_avu6DY88KbQGFv9bEiPi61tpNdJu9LUjpz=s96-c=k-s128',
          'display_name': 'Em1n3m',
          'link': 'https://stackoverflow.com/users/14486726/em1n3m'
        },
        'is_answered': false,
        'view_count': 23,
        'answer_count': 2,
        'score': 0,
        'last_activity_date': 1609788544,
        'creation_date': 1609784344,
        'last_edit_date': 1609784756,
        'question_id': 65567776,
        'content_license': 'CC BY-SA 4.0',
        'link': 'https://stackoverflow.com/questions/65567776/trying-to-learn-reactjs-by-making-a-weather-app-but-im-stuck-at-typeerror-can',
        'title': 'Trying to learn Reactjs by making a weather app but i&#39;m stuck at &quot;TypeError: Cannot read property &#39;temp&#39; of undefined&quot;'
      }, {
        'tags': ['python', 'matplotlib', 'cartopy', 'metpy'],
        'owner': {
          'reputation': 7,
          'user_id': 14399844,
          'user_type': 'registered',
          'profile_image': 'https://lh3.googleusercontent.com/a-/AOh14GhULEXOzeXg3Y3bS1KZyvlrthKAMUG_XcbpR2TqTQ=k-s128',
          'display_name': 'Dayo',
          'link': 'https://stackoverflow.com/users/14399844/dayo'
        },
        'is_answered': true,
        'view_count': 36,
        'answer_count': 1,
        'score': 0,
        'last_activity_date': 1609758263,
        'creation_date': 1609698133,
        'question_id': 65553354,
        'content_license': 'CC BY-SA 4.0',
        'link': 'https://stackoverflow.com/questions/65553354/resampling-and-re-projecting-weather-satellite-image-from-global-view-to-regiona',
        'title': 'Resampling and re-projecting weather satellite image from global view to regional extent'
      }, {
        'tags': ['python', 'python-3.x'],
        'owner': {
          'reputation': 13,
          'user_id': 14931772,
          'user_type': 'registered',
          'profile_image': 'https://lh4.googleusercontent.com/-45khVN1tFyc/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucl0vyvTsZi-wWKq6QyOZ6FIskSCSw/s96-c/photo.jpg?sz=128',
          'display_name': 'Spike Lee',
          'link': 'https://stackoverflow.com/users/14931772/spike-lee'
        },
        'is_answered': true,
        'view_count': 37,
        'accepted_answer_id': 65550036,
        'answer_count': 3,
        'score': 0,
        'last_activity_date': 1609679465,
        'creation_date': 1609677918,
        'question_id': 65549991,
        'content_license': 'CC BY-SA 4.0',
        'link': 'https://stackoverflow.com/questions/65549991/how-to-determine-weather-a-year-is-a-leap-year-and-the-years-thereafter-in-pyth',
        'title': 'How to determine weather a year is a leap year, and the years thereafter in Python?'
      }, {
        'tags': ['javascript', 'html', 'css', 'api', 'weather'],
        'owner': {
          'reputation': 1,
          'user_id': 14867437,
          'user_type': 'registered',
          'profile_image': 'https://www.gravatar.com/avatar/56fbe3f8d488a326c60b975a4cf834c3?s=128&d=identicon&r=PG&f=1',
          'display_name': 'scrumy',
          'link': 'https://stackoverflow.com/users/14867437/scrumy'
        },
        'is_answered': false,
        'view_count': 50,
        'answer_count': 0,
        'score': 0,
        'last_activity_date': 1609412235,
        'creation_date': 1609410114,
        'last_edit_date': 1609412235,
        'question_id': 65519565,
        'content_license': 'CC BY-SA 4.0',
        'link': 'https://stackoverflow.com/questions/65519565/javascript-weather-widget',
        'title': 'JavaScript Weather widget'
      }, {
        'tags': ['grafana', 'openweathermap', 'telegraf', 'influxql'],
        'owner': {
          'reputation': 387,
          'user_id': 1263804,
          'user_type': 'registered',
          'accept_rate': 60,
          'profile_image': 'https://www.gravatar.com/avatar/a2fdb78313703de1a577d1b9c2c4b178?s=128&d=identicon&r=PG',
          'display_name': 'linucks',
          'link': 'https://stackoverflow.com/users/1263804/linucks'
        },
        'is_answered': false,
        'view_count': 39,
        'answer_count': 0,
        'score': 0,
        'last_activity_date': 1609352803,
        'creation_date': 1609270019,
        'last_edit_date': 1609352803,
        'question_id': 65497633,
        'content_license': 'CC BY-SA 4.0',
        'link': 'https://stackoverflow.com/questions/65497633/displaying-weather-forecast-from-openweathermap-collected-with-telegraf',
        'title': 'Displaying weather forecast from Openweathermap collected with Telegraf'
      }, {
        'tags': ['javascript', 'node.js', 'express', 'backend'],
        'owner': {
          'reputation': 3,
          'user_id': 12989256,
          'user_type': 'registered',
          'profile_image': 'https://lh3.googleusercontent.com/a-/AOh14GiRJlJDcdcyC5Ryvn1FJnVSzl9-rd3UdJU9upIe=k-s128',
          'display_name': 'Ashraful Islam Joy',
          'link': 'https://stackoverflow.com/users/12989256/ashraful-islam-joy'
        },
        'is_answered': true,
        'view_count': 49,
        'accepted_answer_id': 65502238,
        'answer_count': 3,
        'score': 0,
        'last_activity_date': 1609323981,
        'creation_date': 1609303465,
        'last_edit_date': 1609323981,
        'question_id': 65502129,
        'content_license': 'CC BY-SA 4.0',
        'link': 'https://stackoverflow.com/questions/65502129/how-to-fix-type-error-cannot-read-property-cityname-of-undefined-in-the-weathe',
        'title': 'How to fix Type Error cannot read property &#39;cityName&#39; of undefined in the weather forecast project?'
      }, {
        'tags': ['javascript', 'html', 'css', 'api'],
        'owner': {
          'reputation': 1,
          'user_id': 14908849,
          'user_type': 'registered',
          'profile_image': 'https://graph.facebook.com/1064864437310312/picture?type=large',
          'display_name': 'Malek Carber',
          'link': 'https://stackoverflow.com/users/14908849/malek-carber'
        },
        'is_answered': false,
        'view_count': 27,
        'answer_count': 0,
        'score': 0,
        'last_activity_date': 1609309422,
        'creation_date': 1609265254,
        'last_edit_date': 1609309422,
        'question_id': 65496706,
        'content_license': 'CC BY-SA 4.0',
        'link': 'https://stackoverflow.com/questions/65496706/how-do-i-change-weather-icons-in-api-open-weather',
        'title': 'How do I change Weather Icons in api open weather?'
      }, {
        'tags': ['python', 'request', 'noaa'],
        'owner': {
          'reputation': 1,
          'user_id': 14908346,
          'user_type': 'registered',
          'profile_image': 'https://lh5.googleusercontent.com/-9jFaH9R_YQ4/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckU0-MiKITH7AHy6cjQSHhxXItPyA/photo.jpg?sz=128',
          'display_name': 'Kaden Shaw',
          'link': 'https://stackoverflow.com/users/14908346/kaden-shaw'
        },
        'is_answered': false,
        'view_count': 28,
        'answer_count': 0,
        'score': 0,
        'last_activity_date': 1609302527,
        'creation_date': 1609258643,
        'last_edit_date': 1609302527,
        'question_id': 65495264,
        'content_license': 'CC BY-SA 4.0',
        'link': 'https://stackoverflow.com/questions/65495264/accessing-weather-information-with-noaa',
        'title': 'Accessing weather information with NOAA'
      }], 'has_more': true, 'quota_max': 300, 'quota_remaining': 260
    } as StackOverflowResponse;
  }


}

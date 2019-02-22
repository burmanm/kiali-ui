import deepFreeze from 'deep-freeze';

const mutIcons = {
  istio: {
    circuitBreaker: { type: 'fa', name: 'bolt', ascii: '\uf0e7 ' },
    missingSidecar: { type: 'pf', name: 'blueprint', ascii: '\ue915 ', color: 'red' },
    mtls: { type: 'pf', name: 'locked', ascii: '\ue923 ' },
    virtualService: { type: 'fa', name: 'code-fork', ascii: '\uf126 ' }
  },
  menu: {
    overview: 'fa fa-tachometer',
    graph: 'fa pficon-topology',
    applications: 'fa pficon-applications',
    workloads: 'fa pficon-bundle',
    services: 'fa pficon-service',
    istioConfig: 'fa pficon-template',
    distributedTracing: 'fa fa-paw'
  }
};

export const icons = deepFreeze(mutIcons) as typeof mutIcons;
